import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, FlatList, TouchableOpacity, LogBox } from 'react-native';
import BrandCardCommon from '../component/BrandCardCommon';
import CommonProductCard from '../component/CommonProductCard';
import { useTranslation } from 'react-i18next';
import { Box, Skeleton } from 'native-base';




const CategoryDetailScreen = ({ route }) => {
  const { category } = route.params;
const id = category?.id;
  // console.log(category?.name)

const navigation = useNavigation();
const {t} = useTranslation();

 const [products, setProducts] = useState([]);
 const [brands, setBrands] = useState([]);
 const [loading, setLoading] = useState(true); // State to manage loading status

    // Fetch brands by category
    const fetchBrandsByCategory = async () => {
      try {
        const response = await fetch(`https://boy.ranaafaqali.com/api/brands/getBrandsByCategory?category=${category?.id}&page=1&limit=2`);
        const data = await response.json();
        console.log(data, 'brands')
        setBrands(data.brands); 
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };
  
    // Fetch products based on category (You may need to modify this endpoint based on API structure)
    const fetchProductsByCategory = async () => {
      console.log(category?.id, 'category id')
      try {
        const response = await fetch(`https://boy.ranaafaqali.com/api/products/getProductsByCategory?category=${category?.id}`);
        const data = await response.json();
        console.log(data.result, 'products')
        setProducts(data.products); // Store fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    useEffect(() => {
      const fetchData = async () => {
         await fetchBrandsByCategory();
        await fetchProductsByCategory();
        setLoading(false); // Set loading to false when data is fetched
      };
      fetchData();
    }, [id]);

    const navigateToAllLists = (section) => {
      navigation.navigate('AllLists', { section });
    };

  return (
    <View style={styles.container}>


<View style={{display: 'flex', flexDirection: 'row',zIndex: 1, justifyContent: 'space-between', alignItems: 'center'}}>

<TouchableOpacity onPress={() => navigation.goBack()}>
  <Image
    source={require('../assets/img40.png')}
    style={{width: 25, height: 25}}
  />
</TouchableOpacity>

<Text style={styles.headerText}>{category?.name}</Text>


<Image
            source={require('../assets/home_dots.png')}
            style={{width: 20, height: 20, tintColor: 'black'}}
          />
</View>
      {/* Header */}
      <View style={styles.header}>
       
        <Text style={styles.subHeaderText}>{t('here are all brands')}</Text>
      </View>
  {/* Search Bar */}
  <View style={styles.searchContainer}>
      <Image
            source={require('../assets/search1.png')}
            style={{width: 17, height: 17, tintColor: 'black', tintColor: '#999'}}
          />       
           <TextInput style={styles.searchInput} placeholder={t('what_u_looking')} placeholderTextColor={"#474444"} />
      </View>

      {loading && (
        
           
      <ScrollView >
  
      {/* Brands Section */}
      <View style={styles.sectionHeader}>
      <Skeleton width={16} height={5} borderRadius="2" />
        {/* <Text style={styles.sectionLink}>See all</Text> */}
        <Skeleton width={10} height={5} borderRadius="2" />

      </View>
      <FlatList
              data={[1, 2, 3, 4, 5]} // Placeholder data for skeleton
              renderItem={() => (
                <Box alignItems="center" padding={2}>
                <Skeleton width="100%" height={150} borderRadius="10" />
              </Box>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
     

      {/* Products Section */}
      <View style={styles.sectionHeader}>
      <Skeleton width={16} height={5} borderRadius="2" />
        {/* <Text style={styles.sectionLink}>See all</Text> */}
        <Skeleton width={10} height={5} borderRadius="2" />
      </View>
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
      </ScrollView>
         
      )}

    
      {!loading && (
         <ScrollView >

          {brands && brands.length > 0 ? (
             <View>
                   <View style={styles.sectionHeader}>
           <Text style={styles.sectionTitle}>{t('brands_title')}</Text>
           {/* <Text style={styles.sectionLink}>See all</Text> */}
           <Text style={styles.sectionLink}>{t('see_all')}</Text>
   
         </View>
         <FlatList
                 data={brands}
                 keyExtractor={(item) => item.id}
                 renderItem={({ item }) => (
                   <View>
                     <BrandCardCommon brand={item} />
                   </View>
                 )}
               />
             </View>
          ):  (<Text style={{textAlign: 'center', fontSize: 12,marginTop: 20, color:"#474444"}}>
          No brand found...
        </Text>)}
  
         {/* Brands Section */}
    
        
         {products && products.length > 0 ? (
          <View>
  {/* Products Section */}
  <View style={styles.sectionHeader}>
           <Text style={styles.sectionTitle}>{t('product_title')}</Text>
           <TouchableOpacity onPress={() => {
                         navigateToAllLists('products')
                    }}>
           <Text style={styles.sectionLink}>{t('see_all')}</Text>
           </TouchableOpacity>
         </View>
         <FlatList
       data={products}
       renderItem={({ item }) => <CommonProductCard product={item} withoutCategory={true} />}
       keyExtractor={item => item.id}
       numColumns={3}
       // columnWrapperStyle={styles.productRow}
       contentContainerStyle={{ padding: 3,}}
   
     />
          </View>
         ) : (
          <Text style={{textAlign: 'center', fontSize: 12,marginTop: 20, color:"#474444"}}>
          No product found...
        </Text>
         ) }
       
         </ScrollView>
      )}

      
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    marginVertical: 10,
  },
  headerText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color:'#474444'
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
    
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionLink: {
    fontSize: 14,
    color: 'black',
  },
  brandCard: {
    flexDirection: 'row',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
  },
  brandLogo: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
  brandInfo: {
    flex: 1,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  brandDescription: {
    fontSize: 14,
    color: '#666',
  },
  brandCountry: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },

  productCard: {
    width: '30%',
    marginBottom: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  productName: {
    fontSize: 14,
    textAlign: 'center',
  },
  productRow: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  listContainerProduct: {
    padding: 3,
  },
});

export default CategoryDetailScreen;
