

// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView, Button, ActivityIndicator, Switch } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import BrandCardCommon from '../component/BrandCardCommon';
// import CommonProductCard from '../component/CommonProductCard';
// import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
// import { Skeleton, Box, HStack, VStack } from 'native-base';
// import ToggleViewProducts from '../component/ToggleViewProducts';



// const AllLists = () => {
//   const selectedBgColor = useSelector((state) => state.country.bgColor);
//   const selectedCountry = useSelector((state) => state.country.selectedCountry);
//   const route = useRoute();
//   const navigation  = useNavigation();
//   const { t } = useTranslation();
//   const [all, setAll] = useState(true);
//   const [brand, setBrand] = useState(false);
//   const [categories, setCategories] = useState(false);

//   const [page, setPage] = useState(1);

//  // Pagination state for each list type
//  const [productsPage, setProductsPage] = useState(1);
//  const [brandsPage, setBrandsPage] = useState(1);
//  const [categoriesPage, setCategoriesPage] = useState(1);

//  const [productsTotalPages, setProductsTotalPages] = useState(1);
//  const [brandsTotalPages, setBrandsTotalPages] = useState(1);
//  const [categoriesTotalPages, setCategoriesTotalPages] = useState(1);

//   // Loading states
//   const [productsLoading, setProductsLoading] = useState(false);
//   const [brandsLoading, setBrandsLoading] = useState(false);
//   const [categoriesLoading, setCategoriesLoading] = useState(false);


//   const [totalPages, setTotalPages] = useState(1);
//   const [isFetchingMore, setIsFetchingMore] = useState(false);

//   const [products, setProducts] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [fetchCategories, setFetchCategories] = useState([]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [searchProducts, setSearchProducts] = useState('');
//   const [searchBrands, setSearchBrands] = useState('');
//   const [searchCategories, setSearchCategories] = useState('');

//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 

//   useEffect(() => {
//     const { section } = route.params ?? {};
//     if (section === 'products') {
//       setAll(true);
//       setBrand(false);
//       setCategories(false);
//     } else if (section === 'brands') {
//       setAll(false);
//       setBrand(true);
//       setCategories(false);
//     } else if (section === 'categories') {
//       setAll(false);
//       setBrand(false);
//       setCategories(true);
//     }
//   }, [route.params]);

//  // Fetch products separately
//  const fetchProducts = async (page, country, isRefresh = false) => {
//   if (productsLoading) return;
//   setProductsLoading(true);

//   try {
//     const productUrl = country 
//       ? `https://boy.ranaafaqali.com/api/products/getproductsBycountry?country=${country}&page=${page}&limit=30`
//       : `https://boy.ranaafaqali.com/api/products/getAllProducts?page=${page}&limit=7`;

//     const response = await axios.get(productUrl);
    
//     if (isRefresh) {
//       setProducts(response.data.result);
//     } else {
//       setProducts(prev => [...prev, ...response.data.result]);
//     }
    
//     setProductsTotalPages(response.data.totalPages);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   } finally {
//     setProductsLoading(false);
//   }
// };

// // Fetch brands separately
// const fetchBrands = async (page, country, isRefresh = false) => {
//   if (brandsLoading) return;
//   setBrandsLoading(true);

//   try {
//     const brandUrl = country 
//       ? `https://boy.ranaafaqali.com/api/brands/brands-by-country?country=${country}&page=${page}&limit=30`
//       : `https://boy.ranaafaqali.com/api/brands/BrandAll?page=${page}&limit=30`;

//     const response = await axios.get(brandUrl);
    
//     if (isRefresh) {
//       setBrands(response.data.brands);
//     } else {
//       setBrands(prev => [...prev, ...response.data.brands]);
//     }
    
//     setBrandsTotalPages(response.data.totalPages);
//   } catch (error) {
//     console.error("Error fetching brands:", error);
//   } finally {
//     setBrandsLoading(false);
//   }
// };

// // Fetch categories separately
// const fetchCategoriesData = async (page, country, isRefresh = false) => {
//   if (categoriesLoading) return;
//   setCategoriesLoading(true);

//   try {
//     const categoryUrl = country 
//       ? `https://boy.ranaafaqali.com/api/categories/CategoryAllByCountry?country=${country}`
//       : `https://boy.ranaafaqali.com/api/categories/CategoryAll`;

//     const response = await axios.get(categoryUrl);
    
//     // if (isRefresh) {
//     //   setCategories(response.data);
//     // } else {
//     //   setCategories(prev => [...prev, ...response.data]);
//     // }
    
//     // setCategoriesTotalPages(response.data.totalPages);
//     setFetchCategories(response.data);
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//   } finally {
//     setCategoriesLoading(false);
//   }
// };



//   // Handle end reached for each list type
//   const handleProductsEndReached = () => {
//     if (productsPage < productsTotalPages && !productsLoading) {
//       const nextPage = productsPage + 1;
//       setProductsPage(nextPage);
//       fetchProducts(nextPage, selectedCountry);
//     }
//   };

//   const handleBrandsEndReached = () => {
//     if (brandsPage < brandsTotalPages && !brandsLoading) {
//       const nextPage = brandsPage + 1;
//       setBrandsPage(nextPage);
//       fetchBrands(nextPage, selectedCountry);
//     }
//   };

//   const handleCategoriesEndReached = () => {
//     if (categoriesPage < categoriesTotalPages && !categoriesLoading) {
//       const nextPage = categoriesPage + 1;
//       setCategoriesPage(nextPage);
//       fetchCategories(nextPage, selectedCountry);
//     }
//   };


//  // Initial data fetch when country changes
//  useEffect(() => {
//   if (all) {
//     setProductsPage(1);
//     fetchProducts(1, selectedCountry, true);
//   }
//   if (brand) {
//     setBrandsPage(1);
//     fetchBrands(1, selectedCountry, true);
//   }
//   if (categories) {
//     setCategoriesPage(1);
//     fetchCategoriesData(1, selectedCountry, true);
//   }
// }, [selectedCountry]);

//   // Dynamically search based on input changes
//   const handleSearchChange = async (type, value) => {
//     if (type === 'products') {
//       setSearchProducts(value);
//     } else if (type === 'brands') {
//       setSearchBrands(value);
//     } else if (type === 'categories') {
//       setSearchCategories(value);
//     }
//     // Trigger search based on the input
//     await handleSearch(selectedCountry);
//   };
//   // Search function for products, brands, and categories
//   const handleSearch = async (country) => {
//     // setLoading(true);
//     const searchCategoryUrl = country 
//     ? `https://boy.ranaafaqali.com/api/categories/SearchCategory?Search=${searchCategories}&country=${country}`
//     : `https://boy.ranaafaqali.com/api/categories/SearchCategory?Search=${searchCategories}`;
//     const searchProductUrl = country 
//     ? `https://boy.ranaafaqali.com/api/products/searchProducts?Search=${searchProducts}&country=${country}`
//     : `https://boy.ranaafaqali.com/api/products/searchProducts?Search=${searchProducts}`;
//   const searchBrandUrl = country 
//     ? `https://boy.ranaafaqali.com/api/Brands/SearchBrand?Search=${searchBrands}&country=${country}`
//     : `https://boy.ranaafaqali.com/api/Brands/SearchBrand?Search=${searchBrands}`;


//     try {
//       if (searchProducts) {
//         // const productRes = await axios.get(`https://boy.ranaafaqali.com/api/products/SearchProducts?Search=${searchProducts}`);
//         const productRes = await axios.get(searchProductUrl);
//         setProducts(productRes.data.Products);
//       }
//       if (searchBrands) {
//         // const brandRes = await axios.get(`https://boy.ranaafaqali.com/api/Brands/SearchBrand?Search=${searchBrands}`);
//       const brandRes = await axios.post(searchBrandUrl);

//         setBrands(brandRes.data.brands);
//       }
//       if (searchCategories) {
//         // const categoryRes = await axios.get(`https://boy.ranaafaqali.com/api/categories/SearchCategory?Search=${searchCategories}`);
//         const categoryRes = await axios.get(searchCategoryUrl);

//         setFetchCategories(categoryRes.data.Categories);
//       }
//     } catch (error) {
//       console.error("Error searching:", error);
//     } finally {
//       // setLoading(false);
//     }
//   };

// // Reset function to clear all pagination states
// const resetPaginationStates = () => {
//   setCategoriesPage(1);
//   setProductsTotalPages(1);
//   setBrandsTotalPages(1);
//   setCategoriesTotalPages(1);
// };


// const handleAllClick = () => {
//   // Update view states
//   setAll(true);
//   setBrand(false);
//   setCategories(false);
  
//   // Clear search states
//   setSearchProducts('');
//   setSearchBrands('');
//   setSearchCategories('');
  
//   // Reset pagination
//   resetPaginationStates();
  
//   // Fetch initial products data
//   fetchProducts(1, selectedCountry, true).then(() => {
//     // Enable end reached handler after initial load
//     setProductsPage(1);
//   });
// };

// const handleBrandClick = () => {
//   // Update view states
//   setAll(false);
//   setBrand(true);
//   setCategories(false);
  
//   // Clear search states
//   setSearchProducts('');
//   setSearchCategories('');
  
//   // Reset pagination
//   resetPaginationStates();
  
//   // Fetch initial brands data
//   fetchBrands(1, selectedCountry, true).then(() => {
//     // Enable end reached handler after initial load
//     setBrandsPage(1);
//   });
// };

//   const handleCategoriesClick = () => {
//     setAll(false);
//     setBrand(false);
//     setCategories(true);
//     setSearchProducts('');
//     setSearchBrands('');
//     // fetchProducts(1, selectedCountry, true);    
//     // fetchBrands(1, selectedCountry, true);    // fetchCategoriesData()
//     fetchCategoriesData()
//   };
//   const clearSearch = () => {
//     setSearchProducts('');
//     setSearchBrands('');
//     setSearchCategories('');
//     fetchProducts(1, selectedCountry, true);    
//     fetchBrands(1, selectedCountry, true);    // fetchCategoriesData()
//   };

//   // Handle scrolling to load more items (only for products and brands)
//   const handleScroll = (event) => {
//     const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
//     if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 20 && !isFetchingMore && page < totalPages) {
//       setIsFetchingMore(true);
//       setPage(prevPage => prevPage + 1);
//     }
//   };
//   // Render footer loading indicator
//   const renderFooter = (loading) => {
//     if (!loading) return null;
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="small" color="grey" />
//       </View>
//     );
//   };


//   // if (loading) {
//   //   return (
//   //     <View style={styles.loadingContainer}>
//   //       <ActivityIndicator size="large" color="grey" />
//   //     </View>
//   //   );
//   // };


//   const randomColors = [
//     '#D9F1EF',  // Red
//     '#F9D3CB',  // Orange
//     '#BCFFA8', // Green
//     '#E8C0FD', // Blue
//     '#FEF06E' // Purple
//   ];

//   const renderItem = ({ item , index}) => (
//     <TouchableOpacity onPress={() => navigation.navigate('CategoryDetail', { category: item})} style={{ 
//       ...styles.categoryCard, 
//       backgroundColor: randomColors[index % randomColors.length],
//       alignItems: 'center', // Center align items horizontally
//     }}>
   
//       <Text style={styles.categoryTitle}>{item.name?.length > 14 ? `${item.name.slice(0, 14)}...` : item.name}</Text>
//       <Image source={{uri: item.category_image}} style={styles.categoryImage} />
    
//       </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>

//     {/* Header Section with Back Button and Menu Icon */}
//     <View style={{ display: 'flex', flexDirection: 'row', zIndex: 1, justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Image
//           source={require('../assets/img40.png')}
//           style={{ width: 25, height: 25 }}
//         />
//       </TouchableOpacity>   
//       <Image
//         source={require('../assets/home_dots.png')}
//         style={{ width: 20, height: 20, tintColor: 'black' }}
//       />
//     </View>

//     {/* Custom Buttons for All, Brands, and Categories */}
//     <View style={styles.buttonContainer}>
//       <TouchableOpacity
//         style={[styles.button, { backgroundColor: all ? selectedBgColor || '#3C3B6E' : '#fff', borderColor: selectedBgColor || '#3C3B6E' }]}
//         onPress={handleAllClick}
//       >
//         <Text style={{ color: all ? '#fff' : selectedBgColor || '#3C3B6E' }}>{t('all_products')}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.button, { backgroundColor: brand ? selectedBgColor || '#3C3B6E' : '#fff', borderColor: selectedBgColor || '#3C3B6E' }]}
//         onPress={handleBrandClick}
//       >
//         <Text style={{ color: brand ? '#fff' : selectedBgColor || '#3C3B6E' }}>{t('brands_title')}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.button, { backgroundColor: categories ? selectedBgColor || '#3C3B6E' : '#fff', borderColor: selectedBgColor || '#3C3B6E' }]}
//         onPress={handleCategoriesClick}
//       >
//         <Text style={{ color: categories ? '#fff' : selectedBgColor || '#3C3B6E' }}>{t('categories_title')}</Text>
//       </TouchableOpacity>
//     </View>

//     {/* Conditionally render the loader or actual content based on loading state */}
//     <ScrollView
//       contentContainerStyle={{ padding: 0 }}
//       // onScroll={handleScroll}
//       scrollEventThrottle={16}
//     >

//       {loading && (
//         <View style={{paddingHorizontal: 10, }}>
//           {/* Render Skeleton Loader */}
//           {/* <HStack space={3} justifyContent="space-between" mb={4}>
//             <Skeleton width={100} height={40} borderRadius="10" />
//             <Skeleton width={100} height={40} borderRadius="10" />
//             <Skeleton width={100} height={40} borderRadius="10" />
//           </HStack> */}

//           <Skeleton width="100%" height={45} borderRadius="10" mb={4} mt={3} />

//           {/* Skeleton for Products/Brands/Categories */}
//           {all && (
//             <FlatList
//               data={[1, 2, 3, 4, 5, 6 , 7, 8, 9]} // Placeholder data for skeleton
//               numColumns={3}
//               renderItem={() => (
//                 <Box alignItems="center" padding={2}>
//                   <Skeleton width={100} height={150} borderRadius="10" />
//                 </Box>
//               )}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           )}

//           {brand && (
//             <FlatList
//               data={[1, 2, 3, 4, 5]} // Placeholder data for skeleton
//               renderItem={() => (
//                 <Box alignItems="center" padding={2}>
//                 <Skeleton width="100%" height={150} borderRadius="10" />
//               </Box>
//               )}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           )}

//           {categories && (
//             <FlatList
//               data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13]} // Placeholder data for skeleton
//               numColumns={2}
//               renderItem={() => (
//                 <Box alignItems="center" padding={2}>
//                   <Skeleton width={160} height={100} borderRadius="10" />
//                 </Box>
//               )}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           )}
//         </View>
//       )}
// {!loading && (
//         <>
//           {/* Search Bar */}
//           {all && (
//             <>
//             <View style={styles.searchRow}>
//               <TextInput
//                 placeholder={t('search_products')}
//                 value={searchProducts}
//                 onChangeText={(value) => handleSearchChange('products', value)}
//                 style={styles.searchBar}
//                 placeholderTextColor="#888888"
//               />
//               {searchProducts?.length > 0 && (
//                 <TouchableOpacity onPress={clearSearch}>
//                   <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvitmTS3sb5EG1i93Ms6hNvV3slZF3aM517Q&s' }} style={{ width: 30, height: 30 }} />
//                 </TouchableOpacity>
//               )}
//             </View>

// <View style={styles.toggleContainer}>
// <Text style={styles.toggleText}>Here, you can view the product's logos</Text>
// <Switch
//   trackColor={{ false: "#767577", true: selectedBgColor || '#3C3B6E' }}
//   thumbColor={ "#f4f3f4"}
//   onValueChange={toggleSwitch}
//   value={isEnabled}
//   style={styles.switch}

// />
// </View>
// </>
     

//           )}

//           {brand && (
//             <View style={styles.searchRow}>
//               <TextInput
//                 placeholder={t('search_brands')}
//                 value={searchBrands}
//                 onChangeText={(value) => handleSearchChange('brands', value)}
//                 style={styles.searchBar}
//                 placeholderTextColor="#888888"
//               />
//               {searchBrands?.length > 0 && (
//                 <TouchableOpacity onPress={clearSearch}>
//                   <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvitmTS3sb5EG1i93Ms6hNvV3slZF3aM517Q&s' }} style={{ width: 30, height: 30 }} />
//                 </TouchableOpacity>
//               )}
//             </View>
//           )}

//           {/* Render All Products, Brands, or Categories */}
          
//       {all && products.length > 0 && (
//         isEnabled ? (
//           <ToggleViewProducts products={products} />
//         ) : (
//           <FlatList
//             data={products}
//             renderItem={({ item }) => <CommonProductCard product={item} />}
//             keyExtractor={item => item.id.toString()} // Ensure id is a string
//             numColumns={3}
//             onEndReached={handleProductsEndReached}
//             onEndReachedThreshold={0.5}
//             ListFooterComponent={() => renderFooter(productsLoading)}
//           />
//         )
//       )}
    


//           {brand && brands?.length > 0 && (
//             <FlatList
//               data={brands}
//               keyExtractor={(item) => item.id}
//               renderItem={({ item }) => (
//                 <View>
//                   <BrandCardCommon brand={item} />
//                 </View>
//               )}
//               onEndReached={handleBrandsEndReached}
//               onEndReachedThreshold={0.5}
//               ListFooterComponent={() => renderFooter(brandsLoading)}
//             />
//           )}

//           {categories && fetchCategories.length > 0 && (
//             <FlatList
//               data={fetchCategories}
//               renderItem={renderItem}
//               keyExtractor={item => item.id}
//               numColumns={2}
//             />
//           )}
//         </>
//       )}
      

//       {(productsLoading  || brandsLoading  || categoriesLoading ) && (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="small" color="grey" />
//         </View>
//       )}
//     </ScrollView>
//   </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff'
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     gap: 15,
//     paddingLeft: 6,
//     // justifyContent: 'space-evenly',
//     marginBottom: 10,
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   toggleText: {
//     fontSize: 16,
//     fontWeight: '700',
//     marginRight: 10,
//     color :'black'
//   },
//   button: {
//     padding: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//   },
//   activeButton: {
//     backgroundColor: '#01B763',

//   },
//   buttonText: {
//     color: '#01B763',
//   },
//   buttonActiveText: {
//     color: '#fff'
//   },
//   searchRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap:1,
//     marginBottom: 10,
//     paddingHorizontal: 10
//   },
//   searchBar: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     color: '#888888',
//     flex: 1,
    
//   },
//   switch: {
//     transform: [{ scaleX: 1.2 }, { scaleY: 0.9 }], // Adjust these values to increase width and height
//   },
//   productCard: {
//     // flex: 1,
//     marginHorizontal: 3,
//     marginVertical:5,
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 10,
   
  
//   },
//   brandlogoProduct: {
//     width: 24,
//     height: 24,
//     borderRadius: 30
//   },
//   categoryTextProduct:{
//     color: '#878787',
//     fontSize: 5,
//     fontFamily: 'Poppins',
//     fontWeight: '500',
//     wordWrap: 'break-word'
//   },
//   headerProduct: {
//     flexDirection: 'row',
//     gap: 15,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   categoryContainerProduct: {
//     backgroundColor: 'white',
//     borderRadius: 15,
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//   },
//   productImage: {
//     width: 80,
//     height: 80,
//     resizeMode: 'contain',
//   },
//   productName: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#fff',
//     // fontWeight: 800
//   },

//   brandName: {
//     fontSize: 18,
//   },
//   // categoryCard: {
//   //   padding: 10,
//   //   margin: 5,
//   //   borderWidth: 1,
//   //   borderColor: '#eee',
//   //   borderRadius: 10,
//   //   paddingBottom: 20
//   // },
//   categoryName: {
//     fontSize: 18,
//   },
//   alphabetContainer: {
//     position: 'absolute',
//     right: 0,
//     top: 20, // Adjust as needed
//     height: '100%',
//     paddingTop: 20, // Padding for top space
//     paddingBottom: 20, // Extra space for the Reset button

//   },
  

//   alphabetLetter: {
//     fontSize: 13,
//     paddingVertical: 1,
//     textAlign: 'center',
//    color: "#0000004D"
//   },

//   categoryContainer: {
//     padding: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   categoryRow: {
//     // justifyContent: 'space-between',
//     // flexWrap: 'wrap',
//     // justifyContent: 'space-between',
//   },
//   categoryCard: {
//     flex: 1,
//     margin: 10,
//     paddingVertical: 20,
//     borderRadius: 10,
//     backgroundColor: '#f0f0f0',
//     position: 'relative', // For absolute positioning of the image
//     height: 125, // Set a fixed height for better layout control
//   },
//   categoryImage: {
//     width: 50,
//     height: 50,
//     // position: 'absolute',
//     // bottom: 10,
//     // right: 10,
//   },
//   categoryTitle: {
//     fontSize: 12,
//     lineHeight: 20,
//     color: 'black',
//     fontWeight: '600',
//     marginBottom: 10, // Space for the image
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
 
// });

// export default AllLists;



// AllLists.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  FlatList,
  HStack,
  Text,
  Image,
  Pressable,
  View,
} from 'native-base';
import { TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const EventListScreen = () => {
   const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch events from API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://demoticket.inasnapmarketing.ai/api/v1/events/getAllEvents'
      );
      setEvents(response.data.data);
      setFilteredEvents(response.data.data);
    } catch (err) {
      console.error(err || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Handle search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredEvents(events);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = events.filter(
        (event) =>
          event.name.toLowerCase().includes(query) ||
          event.address.toLowerCase().includes(query) ||
          (event.category && event.category.toLowerCase().includes(query))
      );
      setFilteredEvents(filtered);
    }
  }, [searchQuery, events]);

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredEvents(events);
  };

  return (
    <Box flex={1} bg="white" padding={3}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/img40.png')}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </View>

      {/* Search Input */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 5,
          backgroundColor: '#f9f9f9',
        }}
      >
        <TextInput
          style={{
            flex: 1,
            paddingHorizontal: 10,
            color: 'grey',
          }}
          placeholder="Buscar evento por nombre/ubicación 🔍"
          placeholderTextColor="grey"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery?.length > 0 && (
          <TouchableOpacity onPress={clearSearch}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvitmTS3sb5EG1i93Ms6hNvV3slZF3aM517Q&s' }} style={{ width: 30, height: 30,   backgroundColor: '#f9f9f9', }} />

          </TouchableOpacity>
        )}
      </View>

      {/* Loading Indicator */}
      {loading ? (
        <ActivityIndicator size="large" color="#3795D6" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            const eventDate = new Date(item?.eventDate);
            const dateString = eventDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            const timeString = eventDate.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <Pressable
                // onPress={() => alert(`Selected: ${item.name}`)}
                onPress={() => navigation.navigate('ProductDetailScreen', {eventInfo: item})}
                borderWidth={1}
                py={3}
                marginBottom={3}
                borderColor="#e6e6e6"
              >
                <HStack
                  mb={0}
                  mx={4}
                  borderRadius="8"
                  alignItems="center"
                >
                  <Image
                    source={{ uri: item.photo }}
                    alt={item.name}
                    size="lg"
                    borderRadius="8"
                  />
                  <VStack flex={1} ml={4}>
                    <Text fontSize="lg" fontWeight="bold" color="primary.800">
                      {item.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600" isTruncated>
                      📍 {item.address}
                    </Text>
                    <Text fontSize="sm" color="gray.600" isTruncated>
                      🗓️ {dateString} {timeString}
                    </Text>
                    <Text fontSize="xs" color="gray.500" isTruncated>
                    🏷️ {item.ticket}
            </Text>
                  </VStack>
                </HStack>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductDetailScreen', {eventInfo: item})}
                  style={{
                    marginTop: 1,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#3795D6',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}
                  >
                    Ver detalles
                    ➡️
                  </Text>
                </TouchableOpacity>
              </Pressable>
            );
          }}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', color: 'gray', marginTop: 20 }}>
              No events found.
            </Text>
          }
        />
      )}
    </Box>
  );
};

export default EventListScreen;
