// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   Image,
//   FlatList,
//   Modal,
//   ImageBackground,
//   Button,
// } from 'react-native';
// // import {Ionicons} from '@expo/vector-icons';
// import CarouselImages from '../component/ProductImagesCarousel';
// import CarouselImagess from '../component/CarouselImagesModal';

// import CommonProductCard from '../component/CommonProductCard';
// import {ScrollView} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {useTranslation} from 'react-i18next';
// import {useSelector} from 'react-redux';
// import ProductDescriptionComponent from '../component/ProductDescriptionComponent';

// const AlternativeProducts = {
//   totalItems: 5,
//   totalPages: 1,
//   currentPage: 1,
//   result: [
//     {
//       id: 4,
//       logo: 'http://res.cloudinary.com/ddjqflks0/image/upload/v1728311056/Bycottapp/Products/productLogos/2024-10-07/xyut2ohttinfyt0bvjkc.png',
//       brand_logo:
//         'http://res.cloudinary.com/ddjqflks0/image/upload/v1728306504/Bycottapp/Brands/brandLogos/2024-10-07/hmo5fupot2vynrocuwgg.png',
//       product_name: 'KitKat',
//       status: null,
//       position: null,
//       description: 'any description',
//       reason: null,
//       bgColor: '#cc7037',
//       reference: null,
//       feedback: null,
//       category: 'Food & Beverages',
//       category_name: 'Food & Beverages',
//       brand_name: 'Papsi Co',
//       category_id: '2',
//       brand_id: '2',
//       countries: {
//         Asia: [
//           'China',
//           'India',
//           'Israel',
//           'Japan',
//           'Malaysia',
//           'Russia',
//           'Singapore',
//           'South Korea',
//           'Taiwan',
//           'United Arab Emirates',
//         ],
//         Africa: ['Algeria', 'Egypt', 'Morocco', 'South Africa'],
//         Europe: [
//           'Austria',
//           'Belgium',
//           'France',
//           'Germany',
//           'Italy',
//           'Netherlands',
//           'Norway',
//           'Poland',
//           'Russia',
//           'Spain',
//           'Sweden',
//           'Switzerland',
//           'United Kingdom',
//         ],
//         Oceania: ['Australia', 'New Zealand'],
//         Antarctica: [],
//         'North America': ['Canada', 'Mexico', 'United States'],
//         'South America': ['Argentina', 'Brazil'],
//       },
//       searchCount: 0,
//       logo_pid:
//         'Bycottapp/Products/productLogos/2024-10-07/xyut2ohttinfyt0bvjkc',
//       imported: false,
//       createdAt: '2024-10-07T14:24:16.000Z',
//       updatedAt: '2024-10-07T14:24:16.000Z',
//     },
//     {
//       id: 3,
//       logo: 'http://res.cloudinary.com/ddjqflks0/image/upload/v1728310887/Bycottapp/Products/productLogos/2024-10-07/j8phrsnxndzm7aagrezb.png',
//       brand_logo:
//         'http://res.cloudinary.com/ddjqflks0/image/upload/v1728309154/Bycottapp/Brands/brandLogos/2024-10-07/mt9dabafihfbnqyrk5if.png',
//       product_name: 'yogurt',
//       status: null,
//       position: null,
//       description: 'any description',
//       reason: null,
//       bgColor: '#e1e2e2',
//       reference: null,
//       feedback: null,
//       category: 'Food & Beverages',
//       category_name: 'Food & Beverages',
//       brand_name: 'Nestle',
//       category_id: '2',
//       brand_id: '4',
//       countries: {
//         Asia: [
//           'China',
//           'India',
//           'Israel',
//           'Japan',
//           'Malaysia',
//           'Russia',
//           'Singapore',
//           'South Korea',
//           'Taiwan',
//           'United Arab Emirates',
//         ],
//         Africa: ['Algeria', 'Egypt', 'Morocco', 'South Africa'],
//         Europe: [
//           'Austria',
//           'Belgium',
//           'France',
//           'Germany',
//           'Italy',
//           'Netherlands',
//           'Norway',
//           'Poland',
//           'Russia',
//           'Spain',
//           'Sweden',
//           'Switzerland',
//           'United Kingdom',
//         ],
//         Oceania: ['Australia', 'New Zealand'],
//         Antarctica: [],
//         'North America': ['Canada', 'Mexico', 'United States'],
//         'South America': ['Argentina', 'Brazil'],
//       },
//       searchCount: 0,
//       logo_pid:
//         'Bycottapp/Products/productLogos/2024-10-07/j8phrsnxndzm7aagrezb',
//       imported: false,
//       createdAt: '2024-10-07T14:21:28.000Z',
//       updatedAt: '2024-10-07T14:21:28.000Z',
//     },
//     {
//       id: 2,
//       logo: 'http://res.cloudinary.com/ddjqflks0/image/upload/v1728310654/Bycottapp/Products/productLogos/2024-10-07/ugquwjv9aoqklzgqepox.png',
//       brand_logo:
//         'http://res.cloudinary.com/ddjqflks0/image/upload/v1728309154/Bycottapp/Brands/brandLogos/2024-10-07/mt9dabafihfbnqyrk5if.png',
//       product_name: 'yogurt1',
//       status: null,
//       position: null,
//       description: 'any description',
//       reason: null,
//       bgColor: '#774033',
//       reference: null,
//       feedback: null,
//       category: 'Food & Beverages',
//       category_name: 'Food & Beverages',
//       brand_name: 'Nestle',
//       category_id: '2',
//       brand_id: '4',
//       countries: {
//         Asia: [
//           'China',
//           'India',
//           'Israel',
//           'Japan',
//           'Malaysia',
//           'Russia',
//           'Singapore',
//           'South Korea',
//           'Taiwan',
//           'United Arab Emirates',
//         ],
//         Africa: ['Algeria', 'Egypt', 'Morocco', 'South Africa'],
//         Europe: [
//           'Austria',
//           'Belgium',
//           'France',
//           'Germany',
//           'Italy',
//           'Netherlands',
//           'Norway',
//           'Poland',
//           'Russia',
//           'Spain',
//           'Sweden',
//           'Switzerland',
//           'United Kingdom',
//         ],
//         Oceania: ['Australia', 'New Zealand'],
//         Antarctica: [],
//         'North America': ['Canada', 'Mexico', 'United States'],
//         'South America': ['Argentina', 'Brazil'],
//       },
//       searchCount: 0,
//       logo_pid:
//         'Bycottapp/Products/productLogos/2024-10-07/ugquwjv9aoqklzgqepox',
//       imported: false,
//       createdAt: '2024-10-07T14:17:35.000Z',
//       updatedAt: '2024-10-07T14:17:35.000Z',
//     },
//   ],
// };

// // Add all the language codes and names
// const languageOptions = {
//   en: 'English',
//   ur: 'Urdu',
//   fr: 'Français',
//   de: 'Deutsch',
//   sv: 'Svenska',
//   tr: 'Türkçe',
// };
// const images = [
//   {
//     url: 'https://res.cloudinary.com/ddjqflks0/image/upload/v1730272011/21_17c7379f-d347-4636-a65c-3d461b0a5b6c_bajspv.png',
//   },
//   {
//     url: 'https://res.cloudinary.com/ddjqflks0/image/upload/v1730272012/238202-shokolad_alpen_gold_molochnyi_s_arahisom_i_kukuruznymi_hlopyami_85_g_vjbl8e.jpg',
//   },
//   {
//     url: 'https://res.cloudinary.com/ddjqflks0/image/upload/v1730272013/641571_tlqqht.jpg',
//   },
//   {
//     url: 'https://res.cloudinary.com/ddjqflks0/image/upload/v1730272014/A1_q2yoej.webp',
//   },

//   {
//     url: 'https://res.cloudinary.com/ddjqflks0/image/upload/v1730272012/1328_mmjebi.png ',
//   },
//   {
//     url: 'https://res.cloudinary.com/ddjqflks0/image/upload/v1730272015/Halls-Xtra-Strong_xjpxbk.jpg',
//   },
//   {
//     url: 'https://res.cloudinary.com/ddjqflks0/image/upload/v1730272015/Halls-Xtra-Strong_xjpxbk.jpg',
//   },
//   {
//     url: 'http://res.cloudinary.com/ddjqflks0/image/upload/v1728544884/Bycottapp/Products/productLogos/2024-10-10/hohuhwrblj6ypqxddsvu.png',
//   },
 
// ];
// const modalImages = [
//   {
//     url: 'https://res.cloudinary.com/ddjqflks0/image/upload/v1729668935/havoline-motor-oil-extra-10w-40_1_f44vuk.png',
//   },
//   {
//     url: 'https://res.cloudinary.com/ddjqflks0/image/upload/v1729674866/alo_ultra_beyazlar_kar_cicegi_ferahligi_toz_camasir_deterjani_1_bhaknc.png',
//   },
//   {
//     url: 'https://res.cloudinary.com/ddjqflks0/image/upload/v1729674996/ariel_dag_esintisi_toz_camasir_deterjani_1_tp6htt.png',
//   },
//   {
//     url: 'http://res.cloudinary.com/ddjqflks0/image/upload/v1728310887/Bycottapp/Products/productLogos/2024-10-07/j8phrsnxndzm7aagrezb.png',
//   },
//   {
//     url: 'http://res.cloudinary.com/ddjqflks0/image/upload/v1728544704/Bycottapp/Products/productLogos/2024-10-10/jfscz4t0jt462d7blz8u.png',
//   },
//   {
//     url: 'http://res.cloudinary.com/ddjqflks0/image/upload/v1728544884/Bycottapp/Products/productLogos/2024-10-10/hohuhwrblj6ypqxddsvu.png',
//   },
// ];
// const ProductDetail = ({route}) => {
//   const {productInfo} = route.params;
//   const navigation = useNavigation();
//   const {t} = useTranslation();
//   const currentLanguage = useSelector(state => state.language); // Global language from Redux
//   const [descriptionLanguage, setDescriptionLanguage] =
//     useState(currentLanguage); // Local state for description language

//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [carouselIndex, setCarouselIndex] = useState(0);
//   // const products = [
//   //   {
//   //     id: '1',
//   //     category: 'Beauty and Personal Care',
//   //     logo: 'https://www.shutterstock.com/shutterstock/photos/2369912939/display_1500/stock-vector-pepsi-logo-pepsico-carbonated-soft-drink-sign-2369912939.jpg',
//   //     image: require('../assets/img6.png'),
//   //     title: 'Pepsi',
//   //     brand: 'Coca Cola',
//   //     backgroundColor: '#00008B',
//   //   },
//   //   {
//   //     id: '2',
//   //     category: 'Food',
//   //     logo: 'https://www.shutterstock.com/shutterstock/photos/2369912939/display_1500/stock-vector-pepsi-logo-pepsico-carbonated-soft-drink-sign-2369912939.jpg',
//   //     image: require('../assets/img6.png'),
//   //     title: '7up',
//   //     brand: 'Coca Cola',

//   //     backgroundColor: '#008000',
//   //   },
//   //   {
//   //     id: '3',
//   //     category: 'Food',
//   //     logo: 'https://www.shutterstock.com/shutterstock/photos/2369912939/display_1500/stock-vector-pepsi-logo-pepsico-carbonated-soft-drink-sign-2369912939.jpg',
//   //     image: require('../assets/img6.png'),
//   //     title: 'Clasico',
//   //     brand: 'Coca Cola',

//   //     backgroundColor: '#8B4513',
//   //   },
//   //   {
//   //     id: '4',
//   //     category: 'Food',
//   //     logo: 'https://www.shutterstock.com/shutterstock/photos/2369912939/display_1500/stock-vector-pepsi-logo-pepsico-carbonated-soft-drink-sign-2369912939.jpg',
//   //     image: require('../assets/img6.png'),
//   //     title: 'Pepsi',
//   //     brand: 'Coca Cola',

//   //     backgroundColor: '#00008B',
//   //   },

//   //   // { id: '1', title: 'Coke', category: 'Food', brand: 'Coca Cola', image: require('../assets/img6.png') },
//   //   // { id: '2', title: 'Yogurt', category: 'Food', brand: 'Nestle', image: require('../assets/img6.png') },
//   //   // { id: '3', title: 'KitKat', category: 'Food', brand: 'Nestle', image: require('../assets/img6.png') },
//   //   // { id: '4', title: 'Pepsi', category: 'Food', brand: 'Pepsi',image: require('../assets/img6.png') },
//   //   // { id: '5', title: '7up', category: 'Food', brand: '7up', image: require('../assets/img6.png') },
//   //   // Add more products here
//   // ];

//   const [product, setProduct] = useState([]);
// console.log(product)
//   const fetchProductById = async () => {
//     try {
//       const response = await fetch(
//         `https://boy.ranaafaqali.com/api/products/getProductsById?id=${productInfo?.id}`,
//       );
//       const data = await response.json();
      
//       setProduct(data.result);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };
//   useEffect(() => {
//     fetchProductById();
//   }, []);

//   const handleImagePress = index => {
//     setSelectedImage(images[index].url);
//     setModalVisible(true);
//   };

//   const sliderImages = [];

//   // Check if product variant exists and parse it if needed
//   let variantArray = [];
  
//   if (product?.variant) {
//     try {
//       // Parse the variant JSON string if it is a string, otherwise use it directly
//       variantArray = typeof product.variant === "string" ? JSON.parse(product.variant) : product.variant;
//     } catch (error) {
//       console.error("Error parsing variant:", error);
//     }
//   }
  
//   // If variantArray has items, add each variant URL to sliderImages
//   if (variantArray.length > 0) {
//     sliderImages.push(
//       ...variantArray.map(imageUrl => ({
//         url: imageUrl,
//       }))
//     );
//   } else if (product.logo) {
//     // If no variants, push the product logo
//     sliderImages.push({
//       url: product.logo,
//     });
//   }
  
//   // Log the sliderImages array to verify the results
//   console.log("Slider Images:", sliderImages);
  
// // Now sliderImages will contain objects with the URLs from the variant array


//   return (
//     <ScrollView>
//       <View style={{backgroundColor: '#F5F5F5', flex: 1, marginBottom: 30}}>
//         <View style={styles.container}>
//           <ImageBackground
//             source={require('../assets/backgroundProductDetail.png')}
//             resizeMode="cover"
//             style={styles.backgroundImage}>
//             <View style={styles.header}>
//               <TouchableOpacity
//                 style={{backgroundColor: 'white', padding: 2, borderRadius: 16}}
//                 onPress={() => navigation.goBack()}>
//                 {/* <Ionicons name="arrow-back" size={22} color="black" /> */}
//                 <Image source={require('../assets/BackIcon.png')} style={{width: 27, height: 27}} />
//               </TouchableOpacity>
//               <Text style={styles.headerTitle}>{t('product_detail')}</Text>
//               <TouchableOpacity>
//                 {/* <Ionicons name="ellipsis-vertical" size={24} color="white" /> */}
//                 <Image source={require('../assets/home_dots.png')} style={{width: 25, height: 25}} />

//               </TouchableOpacity>
//             </View>

//             {/* Product Info */}
//             <View style={styles.productInfo}>
//               <Text style={styles.productName}>{product?.product_name}</Text>
//               <Text style={styles.productDescription}>
//                 {t('exist_in_boycott_list')}
//               </Text>
//               {/* Image Carousel */}

//               <CarouselImages
//                 images={sliderImages}
//                 onImagePress={() => handleImagePress(carouselIndex)}
//                 setCarouselIndex={setCarouselIndex}
//               />
//             </View>

//             {/* Action Buttons */}
//             <View style={styles.actionButtonsContainer}>
//               <TouchableOpacity
//                 style={{
//                   // ...styles.actionButton,
//                   // borderWidth: 2,
//                   // borderColor: 'white',
//                 }}>
//                 {/* <Ionicons name="share-outline" size={20} color="black" /> */}

//                 <Image
//     source={require('../assets/share.png')}
//     style={{width: 50, height: 50}}
//   />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => handleImagePress(carouselIndex)}
//                 style={{
                  
//                   // backgroundColor: 'black',
//                   // borderWidth: 2,
//                   // borderColor: 'white',
//                 }}>
// <Image
//     source={require('../assets/eye-icon.png')}
//     style={{width: 50, height: 50}}
//   />             
//    </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   // ...styles.actionButton,
//                   // borderWidth: 2,
//                   // borderColor: 'white',
//                 }}>
//               <Image
//     source={require('../assets/open-proof.png')}
//     style={{width: 50, height: 50}}
//   />
//               </TouchableOpacity>
//             </View>
//           </ImageBackground>
//           {/* Header */}
//         </View>

//         <View style={{paddingHorizontal: 15, marginBottom: 8}}>
//           <ProductDescriptionComponent />
//         </View>

//         <View style={styles.containerAlternativeProducts}>
//           <View style={styles.headerDescription}>
//             <Text style={styles.titleDescription}>
//               {t('alternative_products')}
//             </Text>
//           </View>

//           <FlatList
//             data={AlternativeProducts.result}
//             renderItem={({item}) => (
//               <CommonProductCard product={item} withoutCategory={true} />
//             )}
//             keyExtractor={item => item.id}
//             numColumns={3}
//           />
//         </View>

//         <Modal
//           visible={modalVisible}
//           transparent={true}
//           animationType="slide"
//           onRequestClose={() => setModalVisible(false)}>
//           <View style={styles.modalContainer}>

        
//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setModalVisible(false)}>
//               {/* <Ionicons
//                 style={styles.closeIcon}
//                 name="arrow-back"
//                 size={25}
//                 color="white"
//               /> */}

// <Image
//     source={require('../assets/img40.png')}
//     style={{width: 25, height: 25, backgroundColor: 'white', paddingVertical:16, paddingHorizontal:16, borderRadius: 20}}
//   />
//             </TouchableOpacity>

            
            
           

//             <CarouselImagess
//               images={sliderImages}
//               setCarouselIndex={setCarouselIndex}
//             />
//             <Text style={{fontSize: 16,
//     fontWeight: '800',
//     color: 'white',
//     textAlign: 'center',
//     textTransform: 'capitalize'}}>{product?.product_name}</Text>
//             <Text style={styles.productDescription}>
//               These are boycott products
//             </Text>
//           </View>
//         </Modal>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //  height: 390,
//     // backgroundColor: '#E13B3B',
//     // // borderBottomRightRadius: 160,
//     // // borderBottomLeftRadius: 160,
//     // borderBottomEndRadius: 172,
//     // borderBottomStartRadius: 172
//   },
//   backgroundImage: {
//     flex: 1,
//     width: '100%', // Ensure the background covers the full width of the screen
//     height: 390, // Set your desired height here

//     justifyContent: 'flex-start', // Align content as needed
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//   },
//   headerTitle: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '500',
//   },

//   productInfo: {
//     padding: 0,
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: 'white',
//     textAlign: 'center',
//     textTransform: 'capitalize',
//   },
//   productDescription: {
//     fontSize: 12,
//     color: 'white',
//     marginTop: 2,
//     fontStyle: 'italic',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   productDescriptionn: {
//     marginTop: 10, // Add space between image and text
//     fontSize: 16,
//     color: 'white',
//     textAlign: 'center',
//   },
//   actionButtonsContainer: {
//     position: 'absolute',
//     bottom: -10.5,
//     left: 0,
//     right: 0,

//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   actionButton: {
//     backgroundColor: 'white',
//     // borderRadius: 40,
//     // padding: 10,
//     elevation: 5,
//     shadowColor: '#000',

//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   // modalContainer: {
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   backgroundColor: '#d32f2f',
//   //   paddingBottom: 20, // Adds space below the modal
//   //   paddingTop: 20, // Adds space above the modal for arrow
//   // },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: '#d32f2f', // Red background
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   closeButton: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     zIndex: 1,
//   },
//   closeIcon: {
//     width: 25,
//     height: 25,
//     tintColor: 'white',
//   },
//   fullImage: {
//     width: '100%',
//     height: '90%',
//     resizeMode: 'contain',
//   },

//   containerDescription: {
//     // borderWidth: 1,
//     // borderColor: '#007bff',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginHorizontal: 10,
//     paddingTop: 10,
//     marginTop: 20,
//     backgroundColor: '#fff',
//   },
//   containerAlternativeProducts: {
//     borderRadius: 8,
//     paddingHorizontal: 5,
//     marginHorizontal: 10,
//     marginTop: 10,

//     backgroundColor: '#F5F5F5',
//   },

//   headerDescription: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   titleDescription: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   languageButton: {
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 9.904762268066406,
//     backgroundColor: '#999999',
//     borderStyle: 'solid',
//     borderWidth: 0.6190476417541504,
//     borderColor: 'rgba(255, 255, 255, 1.0)',
//   },
//   languageText: {
//     fontSize: 14,
//     color: '#fff',
//   },
//   description: {
//     fontFamily: 'Roboto',
//     fontSize: 14,
//     fontWeight: '300',
//     fontStyle: 'normal',
//     lineHeight: 24,
//     letterSpacing: 1,
//     textAlign: 'center',
//     color: '#000000',
//     lineHeight: 20,
//     textAlign: 'justify',
//     paddingBottom: 12,
//   },
// });

// export default ProductDetail;

// // import React, { useState } from 'react';
// // import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
// // import Swiper from 'react-native-swiper';
// // import Icon from 'react-native-vector-icons/Ionicons';

// // const ProductDetail = () => {
// //   const [images, setImages] = useState([
// //     { id: '1', uri: 'https://m.media-amazon.com/images/I/51btQudC3YL._SL1198_.jpg' },
// //     { id: '2', uri: 'https://m.media-amazon.com/images/I/51btQudC3YL._SL1198_.jpg' },
// //     { id: '3', uri: 'https://m.media-amazon.com/images/I/51btQudC3YL._SL1198_.jpg' },
// //   ]);

// //   const [selectedImage, setSelectedImage] = useState(images[0]); // Initialize with the first image
// //   const [isModalVisible, setIsModalVisible] = useState(false); // To control the image modal

// //   const openImageModal = () => {
// //     setIsModalVisible(true); // Show modal
// //   };

// //   const closeImageModal = () => {
// //     setIsModalVisible(false); // Hide modal
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <Text style={styles.title}>Coca Cola Cherry</Text>
// //         <Text style={styles.subtitle}>This is boycott products</Text>
// //       </View>

// //       {/* Image Slider */}
// //       <Swiper
// //         style={styles.slider}
// //         loop={false}
// //         showsPagination={true}
// //         onIndexChanged={(index) => setSelectedImage(images[index])}
// //       >
// //         {images.map((image) => (
// //           <View key={image.id} style={styles.imageContainer}>
// //             <Image source={{ uri: image.uri }} style={styles.productImage} />
// //           </View>
// //         ))}
// //       </Swiper>

// //       {/* View Icon */}
// //       <TouchableOpacity  onPress={openImageModal}>
// //         {/* <Icon name="eye-outline" size={24} color="black" /> */}
// //         <Text>Wawqas</Text>
// //       </TouchableOpacity>

// //       {/* Image Modal */}
// // <Modal visible={isModalVisible} transparent={true} animationType="slide">
// //   <View style={styles.modalContainer}>
// //     <TouchableOpacity onPress={closeImageModal} style={styles.closeButton}>
// //       <Icon name="close-circle-outline" size={30} color="#fff" />
// //     </TouchableOpacity>
// //     <Image source={{ uri: selectedImage.uri }} style={styles.modalImage} />
// //   </View>
// // </Modal>

// //       {/* Description */}
// //       <View style={styles.descriptionContainer}>
// //         <Text style={styles.descriptionTitle}>Description</Text>
// //         <Text style={styles.descriptionText}>
// //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// //         </Text>
// //       </View>

// //       {/* Alternative Products */}
// //       <View style={styles.alternativeContainer}>
// //         <Text style={styles.alternativeTitle}>Alternative products</Text>
// //         <FlatList
// //           horizontal
// //           data={[
// //             { id: '1', name: 'Coca Cola', uri: 'https://link_to_alternative1.jpg' },
// //             { id: '2', name: 'Pepsi', uri: 'https://link_to_alternative2.jpg' },
// //             { id: '3', name: '7up', uri: 'https://link_to_alternative3.jpg' },
// //           ]}
// //           renderItem={({ item }) => (
// //             <View style={styles.alternativeItem}>
// //               <Image source={{ uri: item.uri }} style={styles.alternativeImage} />
// //               <Text style={styles.alternativeName}>{item.name}</Text>
// //             </View>
// //           )}
// //           keyExtractor={(item) => item.id}
// //         />
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //     backgroundColor: '#fff',
// //   },
// //   header: {
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#d32f2f',
// //   },
// //   subtitle: {
// //     fontSize: 14,
// //     color: '#6d6d6d',
// //   },
// //   slider: {
// //     height: 250,
// //     marginBottom: 20,
// //   },
// //   imageContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   productImage: {
// //     width: 150,
// //     height: 250,
// //     resizeMode: 'contain',
// //   },
// //   viewIcon: {
// //     position: 'absolute',
// //     right: 20,
// //     bottom: 220,
// //   },
// //   modalContainer: {
// // flex: 1,
// // backgroundColor: 'rgba(0, 0, 0, 0.8)',
// // justifyContent: 'center',
// // alignItems: 'center',
// //   },
// //   closeButton: {
// //     position: 'absolute',
// //     top: 50,
// //     right: 20,
// //   },
// //   modalImage: {
// //     width: 300,
// //     height: 500,
// //     resizeMode: 'contain',
// //   },
// //   descriptionContainer: {
// //     marginVertical: 20,
// //   },
// //   descriptionTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   descriptionText: {
// //     fontSize: 14,
// //     color: '#6d6d6d',
// //   },
// //   alternativeContainer: {
// //     marginTop: 20,
// //   },
// //   alternativeTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   alternativeItem: {
// //     marginRight: 10,
// //     alignItems: 'center',
// //   },
// //   alternativeImage: {
// //     width: 50,
// //     height: 100,
// //     resizeMode: 'contain',
// //   },
// //   alternativeName: {
// //     fontSize: 12,
// //     marginTop: 5,
// //   },
// // });

// // export default ProductDetail;
import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';

import {
  Box,
  

  ScrollView,
  VStack,
  HStack,
  IconButton,

  Button,
 

} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';


const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const {eventInfo} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  // const userRole =  AsyncStorage.getItem('userRole');
  const {  userRole, isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated, ';userrrrrr')
  const [selectedImage, setSelectedImage] = useState(null);

  const eventImages = [
    { id: '1', uri: 'https://via.placeholder.com/300x200' },
    { id: '2', uri: 'https://via.placeholder.com/300x200' },
    { id: '3', uri: 'https://via.placeholder.com/300x200' },
  ];
  const eventDate = new Date(eventInfo?.eventDate);
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
  const selectDateAndNavigate = (selection) => {
    setModalVisible(false);
    navigation.navigate("SeatMap", { event: eventInfo, selectionDate: selection });
  };
  const handleBookNow = () => {
    // console.log("here")
    // setModalVisible(true);
   
    if (userRole == "user" && userRole != null && isAuthenticated != false) {
      setModalVisible(true); // Show the modal for date selection
      
    } else {
      alert("Por favor inicie sesión o regístrese para continuar con la reserva.");
      navigation.navigate("login");
    }
  };
  return (
    <Box flex={1} bg="white">
      {/* Header with Back Arrow */}
      <HStack
        bg="#2A2A35"
        px={4}
        py={3}
        alignItems="center"
        justifyContent="space-between"
      >
              <TouchableOpacity onPress={()=> navigation.goBack()} >
                            <Image source={require('../assets/BackIcon.png')} style={{width: 30, height: 30, tintColor: '#fff'}}    onPress={() => navigation.goBack()} />

                    </TouchableOpacity>
        <Text color="white" fontSize="20" fontWeight="bold" style={{color:"#fff"}}>
        Detalles del evento

        </Text>
        <Box width="6" /> 
      </HStack>

      <ScrollView>
        {/* Cover Image */}
        <Image
          source={{ uri: eventInfo?.photo }}
          alt="Event Cover"
          style={styles.coverImage}
        />

        {/* Event Details */}
        <VStack px={4} py={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            {eventInfo?.name}
          </Text>
          <HStack space={4} mb={2}>
            <Text bg="cyan.100" color="cyan.800" px={2} py={1} borderRadius={5}>
              Personaje: {eventInfo?.currency}{eventInfo.vipprice}
            </Text>
            <Text bg="cyan.100" color="cyan.800" px={2} py={1} borderRadius={5}>
              Económica: {eventInfo?.currency}{eventInfo.economyprice}
            </Text>
          </HStack>
          <Text mb={1}>📅 {eventInfo.address}</Text>
          <Text mb={1}>🕒 {dateString} {timeString}
          </Text>
            <Text mb={3} color="gray.500" >
                      🎫 {eventInfo.ticket}
                      </Text>

          {/* Event Statistics */}
          <VStack space={1} mb={4}>
            <Text>👥 Capacidad Total: {eventInfo?.TotalCapacity}</Text>
            <Text>🪑 Asientos VIP: {eventInfo?.vipSize}, Asientos Económicos: {eventInfo?.economySize}</Text>
            <Text>✅ Asientos Disponibles:  {eventInfo?.vipSize + eventInfo?.economySize - eventInfo?.reservedSeats?.length}</Text>
          </VStack>

          {/* Highlights */}
          <VStack space={1} mb={4}>
            <Text>✔️ Opciones Económicas</Text>
            <Text>✔️ Experiencias Inolvidables</Text>
            <Text>✔️ Planificación Sin Estrés</Text>
          </VStack>

          {/* Organizer */}
          <HStack alignItems="center" mb={4}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              alt="Organizer"
              style={styles.organizerImage}
            />
            <Text ml={2}>Organizador: Organizador De Eventos</Text>
          </HStack>

          {/* Description */}
          <Text fontSize="md" fontWeight="bold" mb={0}>
            Descripción
          </Text>
          <Text mb={4}>
          {eventInfo?.desc}Únase a nosotros para
                  {eventInfo?.name}, un evento emocionante
                  ¡Eso promete inspirar, educar y entretener! Si eres un profesional [industria/profesión], un entusiasta o simplemente buscas una experiencia única, ¡no te puedes perder este evento!
          </Text>

          {/* Gallery */}
          <Text fontSize="md" fontWeight="bold" mb={2}>
            Galería De Eventos
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack space={3}>
              {eventInfo?.gallery.map((image) => (
                <Image
                  key={image.id}
                  source={{ uri: image }}
                  alt={`Event Image ${image.id}`}
                  style={styles.galleryImage}
                  onTouchEnd={() => setSelectedImage(image)}
                />
              ))}
            </HStack>
          </ScrollView>
        </VStack>
      </ScrollView>

      {/* Reserve Button */}
      <Button
      style={{backgroundColor: 'green'}}
        _text={{ color: 'white', fontWeight: 'bold' }}
        // onPress={() => alert('"¡Estamos trabajando en ello! Próximamente..." We are Working on It! Coming Soon..." ')}
        // onPress={() => navigation.navigate('SeatMap', { event: eventInfo})}
        onPress={handleBookNow}
        mx={4}
        mb={4}
      >
        RESERVAR AHORA
      </Button>

      {/* Image Modal */}
      {/* <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        <Modal.Content maxWidth="90%" bg="#2A2A35">
          <Modal.CloseButton />
          <Modal.Body>
            <Image
              source={{ uri: selectedImage }}
              alt="Full Image"
              style={styles.fullImage}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal> */}
      <Modal
  visible={!!selectedImage}
  transparent={true}
  animationType="slide"
  onRequestClose={() => setSelectedImage(null)}
>
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
    <View style={{ backgroundColor: "#2A2A35", padding: 20, borderRadius: 10 }}>
      <TouchableOpacity onPress={() => setSelectedImage(null)} style={{ alignSelf: "flex-end" }}>
        <Text style={{ color: "white", fontSize: 16 }}>✖</Text>
      </TouchableOpacity>
      <Image source={{ uri: selectedImage }} style={{ width: 250,
    height: 210,
    resizeMode: 'contain',}} />
    </View>
  </View>
</Modal>



      {/* <Modal isOpen={modalVisible} onClose={() =>  setModalVisible(false)}>
      <Modal.Content  bg="white" width="90%" height="40%">
          <Modal.CloseButton />
          <Modal.Body>
        <View style={{ flex: 1, padding:5 }}>
          <View style={{ backgroundColor: "white",  borderRadius: 10 ,alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Elija una fecha</Text>

        
            <TouchableOpacity
              style={{ padding: 10, borderWidth: 2, borderColor: "#007bff", borderRadius: 8, marginVertical: 5, width: "100%", alignItems: "center" }}
              onPress={() => selectDateAndNavigate("first")}
            >
              <Text style={{ fontWeight: "bold" }}>{new Date(eventInfo?.eventDateSec).toDateString()}</Text>
              <Text>{new Date(eventInfo?.eventTimeSec).toLocaleTimeString()}</Text>
            </TouchableOpacity>

           
            <TouchableOpacity
              style={{ padding: 10, borderWidth: 2, borderColor: "#007bff", borderRadius: 8, marginVertical: 5, width: "100%", alignItems: "center" }}
              onPress={() => selectDateAndNavigate("second")}
            >
              <Text style={{ fontWeight: "bold" }}>{new Date(eventInfo?.eventDate).toDateString()}</Text>
              <Text>{new Date(eventInfo?.eventTime).toLocaleTimeString()}</Text>
            </TouchableOpacity>

           
          </View>
        </View>
        </Modal.Body>
        </Modal.Content>
      </Modal> */}
      <Modal
  visible={modalVisible}
  transparent={true}
  animationType="slide"
  onRequestClose={() => setModalVisible(false)}
>
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
    <View style={{ backgroundColor: "white", width: "90%", padding: 20, borderRadius: 10 }}>
      <TouchableOpacity onPress={() => setModalVisible(false)} style={{ alignSelf: "flex-end" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>✖</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>Elija una fecha</Text>

      <TouchableOpacity
        style={{ padding: 10, borderWidth: 2, borderColor: "#007bff", borderRadius: 8, marginVertical: 5, alignItems: "center" }}
        onPress={() => selectDateAndNavigate("first")}
      >
        <Text style={{ fontWeight: "bold" }}>{new Date(eventInfo?.eventDateSec).toDateString()}</Text>
        <Text>{new Date(eventInfo?.eventTimeSec).toLocaleTimeString()}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ padding: 10, borderWidth: 2, borderColor: "#007bff", borderRadius: 8, marginVertical: 5, alignItems: "center" }}
        onPress={() => selectDateAndNavigate("second")}
      >
        <Text style={{ fontWeight: "bold" }}>{new Date(eventInfo?.eventDate).toDateString()}</Text>
        <Text>{new Date(eventInfo?.eventTime).toLocaleTimeString()}</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

    </Box>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  organizerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  galleryImage: {
    width: Dimensions.get('window').width * 0.6,
    height: 120,
    borderRadius: 10,
  },
  fullImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});

export default ProductDetail;