import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet, TextInput ,} from 'react-native';
import BrandDetailScreenCardSingle from '../component/BrandDetailScreenCardSingle';
import { useNavigation } from '@react-navigation/native';
import MarqueeText from 'react-native-marquee';
import CommonProductCard from '../component/CommonProductCard';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Skeleton, Box } from 'native-base';

const BrandDetailScreen = ({ route }) => {
  const selectedBgColor = useSelector((state) => state.country.bgColor);
  const selectedCountry = useSelector((state) => state.country.selectedCountry);
  const { brandInfo } = route.params;
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [allProductsSelected, setAllProductsSelected] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true); // State to manage loading status

  // Fetch all categories from the server
  const fetchCategories = async (country) => {
    try {
      const categoryUrl = country 
    ? `https://boy.ranaafaqali.com/api/categories/CategoryAllByCountry?country=${selectedCountry}`
    : 'https://boy.ranaafaqali.com/api/categories/CategoryAll';
      const response = await fetch(categoryUrl);
      const data = await response.json();
      console.log(data)
      setCategories(data); // Store categories in state
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Fetch products based on the brand ID
  const fetchProducts = async (brandId) => {
    try {
      const response = await fetch(`https://boy.ranaafaqali.com/api/products/getProductsByBrand?brand_id=${brandId}`);
      const data = await response.json();
      if (data.status) {
        setProducts(data.result); // Store products in state
        setFilteredProducts(data.result); // Initially display all products
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleClickAll = () => {
    fetchProducts(brandInfo.id); 
    setSelectedCategories([])
    setAllProductsSelected(true);

  }

  // Fetch products based on selected categories and brand ID
  const fetchProductsByBrandAndCategory = async (categoryIds) => {
    if (categoryIds.length === 0) {
      setFilteredProducts(products); // Reset to all products if no category selected
      return;
    }

    try {
      const brandId = brandInfo.id;
      const categoryIdParam = categoryIds.join(',');
      const response = await fetch(
        `https://boy.ranaafaqali.com/api/products/getProductsByBrandAndCategories?category_id=${categoryIdParam}&brand_id=${brandId}`
      );
      const data = await response.json();
      if (data.status) {
        setFilteredProducts(data.result); // Set filtered products from API response
      } else {
        setFilteredProducts([]); // Set to empty if no products found
      }
    } catch (error) {
      console.error('Error fetching filtered products:', error);
    }
  };

  // Handle category selection
  const toggleCategorySelection = (categoryId) => {
    const updatedSelectedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(updatedSelectedCategories);

    // Fetch products based on updated category selection
    fetchProductsByBrandAndCategory(updatedSelectedCategories);
  };

  // Handle search functionality
  const filterProductsBySearch = () => {
    if (!searchQuery) {
      // Reset to all products if the search query is empty
      setFilteredProducts(products);
    } else {
      // Filter products based on search query
      const filtered = products.filter(product => 
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // // Fetch categories and products when the component mounts
  // useEffect(() => {
  //   fetchCategories();
  //   fetchProducts(brandInfo.id); // Fetch products using the brand ID from route params
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
     
      if (!selectedCountry) {
        // Initial fetch without country
        await fetchCategories();
      } else {
        // Fetch data with selectedCountry when it changes
        await fetchCategories(selectedCountry);
      }
      await fetchProducts(brandInfo.id);
      setLoading(false); // Set loading to false when data is fetched
    };
    fetchData();
  }, [selectedCountry]);

  // Filter products whenever search query changes
  useEffect(() => {
    filterProductsBySearch();
  }, [searchQuery, products]);

  return (
    <ScrollView style={styles.container}>
      {/* Company Info Section */}
      <View style={{...styles.companyContainer, backgroundColor: selectedBgColor ||  '#3C3B6E'}}>
        <View style={{ display: 'flex', flexDirection: 'row', zIndex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/img40.png')} style={{ width: 25, height: 25, tintColor: 'white' }} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{t('brand_detail')}</Text>
          <Image source={require('../assets/home_dots.png')} style={{ width: 20, height: 20, tintColor: 'white' }} />
        </View>
        <View style={{ marginTop: 11 }}>
          <BrandDetailScreenCardSingle brand={brandInfo} />
        </View>
      </View>

      {/* Toggle Section */}
      <View style={styles.mainToggleSection}>
        <View style={styles.toggleSection}>
          <TouchableOpacity onPress={handleClickAll} style={allProductsSelected ? styles.activeToggleButton : styles.toggleButton}>
            <Text style={allProductsSelected ? {fontSize: 13,color: selectedBgColor||'#3C3B6E'} : styles.toggleText}>{t('all_products')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAllProductsSelected(false)} style={!allProductsSelected ? styles.activeToggleButton : styles.toggleButton}>
            {/* <Text style={!allProductsSelected ? styles.activeToggleText : styles.toggleText}>Categories</Text> */}
            <Text style={!allProductsSelected ? {fontSize: 13,color: selectedBgColor||'#3C3B6E'} : styles.toggleText}>{t('categories_title')}</Text>

          </TouchableOpacity>
        </View>

        <View style={styles.productCountContainer}>
          <Image source={require('../assets/totalProducts-icon.png')} style={{ width: 16, height: 16 }} />
          <Text style={styles.productCountText}>{products?.length}+ {t('product_title')}</Text>
        </View>
      </View>

      {allProductsSelected && (
        <View style={styles.searchContainer}>
          <Image source={require('../assets/search1.png')} style={{ width: 17, height: 17, tintColor: '#999', marginLeft: 10 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="What are u looking for ?"
            value={searchQuery} // Bind search input
            onChangeText={setSearchQuery} // Update search query state
            placeholderTextColor="#888888" // Set your desired color here
          />
        </View>
      )}

      {/* Category Filter Section */}
      {!allProductsSelected && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => toggleCategorySelection(item.id)}
              style={[
                styles.categoryButton,
                selectedCategories.includes(item.id) && styles.selectedCategoryButton,
              ]}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Image source={{uri: item.category_image}} style={{ width: 25, height: 25, marginLeft: 10 , resizeMode: 'contain', backgroundColor: '#BCFFA8', borderRadius: 10, }} />
                <MarqueeText
                  // style={selectedCategories.includes(item.id) ? styles.selectedCategoryText : styles.categoryText}
                  style={[
                    styles.categoryText,
                    selectedCategories.includes(item.id) && styles.selectedCategoryText,
                    { width: 80 } // Adjust width to fit inside the button
                  ]}
                  speed={0.03}
                  marqueeOnStart={true}
                  loop={true}
                  delay={1000}
                >
                  {item.name}
                </MarqueeText>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
{loading && (

<FlatList
data={[1, 2, 3, 4, 5, 6 , 7, 8, 9]} // Placeholder data for skeleton
numColumns={3}
renderItem={() => (
  <Box alignItems="center" padding={2}>
    <Skeleton width={100} height={150} borderRadius="10" />
  </Box>
)}
keyExtractor={(item, index) => index.toString()}
/>
)}
{!loading ? (
  filteredProducts.length > 0 ? (
    <FlatList
      data={filteredProducts} // Use filteredProducts, not products
      numColumns={3}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CommonProductCard product={item} withoutCategory={true} />}
      style={styles.productGrid}
    />
  ) : (
    <Text style={{textAlign: 'center', fontSize: 12,marginTop: 20}}>
      No product found. Please check another.
    </Text>
  )
): null }



      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
   
  },
  companyContainer: {
    
    padding:20,
    height:130,
    marginBottom: 53
    
  
  },
  headerText:{
  color: 'white'
  },
  companyInfo: {
    alignItems: 'center',
    marginTop:12
  },
  companyLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 10,
  },
  companyDescription: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 5,
  },
  productCount: {
    fontSize: 14,
    color: '#FFF',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 26,
    
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
    
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#888888'
  },
  productCountContainer: {
    // marginLeft: 10,
    backgroundColor: 'transparent',
    flexDirection:'row',
    alignItems: 'center',
    gap: 1.5
  },
  mainToggleSection : {
   
      display: 'flex',
      flexDirection: 'row',
     
      paddingHorizontal:25,
      
      justifyContent: 'space-between',
    alignItems: 'center'
   
  },
  toggleSection: {
    borderRadius: 20.5001220703125,
    backgroundColor: "#DEDEDE",
    borderStyle: 'solid',
    borderWidth: 0.7454589605331421,
    borderColor: "rgba(235, 237, 236, 1.0)",
    flexDirection: 'row',
   

    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  toggleButton: {
    padding: 8,
    paddingHorizontal: 15,
 
    borderRadius: 17.518285751342773,
  
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowOffset: {
      width: 0,
      height: 13.41826057434082
    },
    shadowRadius: 29.818357467651367,
    shadowOpacity: 1,
 
    // marginHorizontal: 0,
    // marginLeft:0,
   
    // backgroundColor: '#E0E0E0',
  },
  productCountText: {
    fontSize: 11,
   color: "#000000"
  },
  activeToggleButton: {
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 17.518285751342773,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowOffset: {
      width: 0,
      height: 13.41826057434082
    },
    shadowRadius: 29.818357467651367,
    shadowOpacity: 1,
  


  },
  toggleText: {
    fontSize: 13,
   color: "#333"
  },
  activeToggleText: {
    fontSize: 13,
   color: "#01B742",
  },
  categoryList: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  categoryButton: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: 135,
    overflow: 'hidden', // Ensures no overflow of content

    backgroundColor: '#D9F1EF',
    borderRadius: 20,
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: '#34A853',
  },
  categoryText: {
    fontSize: 13,
    color: '#333',
    width: 80, // Set the same fixed width for consistency

  },
  selectedCategoryText: {
    fontSize: 14, 
    color: '#FFF',
    width: 80, // Set the same fixed width for consistency

  },
  productGrid: {
    paddingHorizontal: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    marginTop: 10,
    color: '#333',
  },
});

export default BrandDetailScreen;
