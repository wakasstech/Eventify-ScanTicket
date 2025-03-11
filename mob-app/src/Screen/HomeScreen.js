

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, StatusBar,TouchableOpacity, Modal,FlatList, ActivityIndicator, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProductCard from '../component/ProductCard';
import BrandCard from '../component/BrandCard';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CountryDropdown from '../component/CountryDropdown';
import MarqueeText from 'react-native-marquee';
import CommonProductCard from '../component/CommonProductCard';
import { useSelector } from 'react-redux';
import LanguageSwitcher from '../component/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Box, Icon, Skeleton } from 'native-base';
import EventCard from '../component/EventCard';
import img1 from '../assets/event/test1.jpg';
import img2 from '../assets/event/test2.jpg';
import img3 from '../assets/event/test3.jpg';
import img4 from '../assets/event/test4.jpg';
import img5 from '../assets/event/test5.jpg';
import img6 from '../assets/event/test6.jpg';

const categories = [
  { name: 'Música', icon: 'musical-note' }, // NativeBase icon name for music
  { name: 'Deportes', icon: 'football' },  // NativeBase icon name for sports
  { name: 'Conferencia', icon: 'videocam' }, // NativeBase icon name for conference
  { name: 'Taller', icon: 'build' }, // NativeBase icon name for workshop
  { name: 'Teatro', icon: 'theater' }, // NativeBase icon name for theater
];
const mockReviews = [
  {
      review: "Felicidades a esta empresa por hacer que nuestro retiro corporativo sea memorable. Su creatividad y atención al detalle añadieron un toque único a cada aspecto del evento.",
      imgSrc: img1,
      name: "Sabina González",
      title: "CEO, TechCorp"
  },
  {
      review: "Me sorprendieron las excepcionales habilidades de gestión de eventos del equipo. Convirtieron la fiesta de cumpleaños de mi hija en una experiencia mágica que nuestra familia atesorará para siempre.",
      imgSrc: img2,
      name: "Fernando Martínez",
      title: "Padre Feliz"
  },
  {
      review: "Tuve el placer de asistir a una boda organizada por el equipo de gestión de eventos, y debo decir que cada detalle fue meticulosamente planificado. La decoración, la música y el ambiente fueron impecables.",
      imgSrc: img3,
      name: "Sara López",
      title: "Invitada de Boda"
  },
  {
      review: "La empresa de gestión de eventos superó todas las expectativas con la organización de nuestra recaudación de fondos benéfica. Su dedicación y profesionalismo hicieron que el evento fuera un gran éxito.",
      imgSrc: img4,
      name: "Santiago Fernández",
      title: "Fundador, Fundación HH"
  },
  {
      review: "No podría haber pedido un mejor equipo para manejar el lanzamiento de mi producto. Hicieron realidad mi visión y se aseguraron de que cada invitado quedara impresionado por el evento.",
      imgSrc: img5,
      name: "Ana Martínez",
      title: "Emprendedora, SGlamours"
  },
  {
      review: "Asistir a la conferencia organizada por este equipo fue un placer. Su coordinación y ejecución impecable hicieron que fuera una experiencia valiosa para todos los asistentes.",
      imgSrc: img6,
      name: "Zulema García",
      title: "Entusiasta de la Tecnología"
  },
];
// const events = [
//   {
//     name: 'Fiesta de la Música  la Música',
//     venue: 'Sábado, 17 de junio Sábado, 17 de junio',
//     address: 'Plaza Mayor, Madrid aza Mayor, Madrid',
//     photo: 'https://res.cloudinary.com/dqcimdgce/image/upload/v1736192680/eventos/iruoejwpglwsliyprkm6.png',
//     category: 'Música',
//     vipprice: 100,
//     economyprice: 50,
//   },
//   {
//     name: 'Fiesta de la Música  la Música',
//     venue: 'Sábado, 17 de junio Sábado, 17 de junio',
//     address: 'Plaza Mayor, Madrid aza Mayor, Madrid',
//     photo: 'https://res.cloudinary.com/dqcimdgce/image/upload/v1736192680/eventos/iruoejwpglwsliyprkm6.png',
//     category: 'Música',
//     vipprice: 100,
//     economyprice: 50,
//   },
//   {
//     name: 'Fiesta de la Música  la Música',
//     venue: 'Sábado, 17 de junio Sábado, 17 de junio',
//     address: 'Plaza Mayor, Madrid aza Mayor, Madrid',
//     photo: 'https://res.cloudinary.com/dqcimdgce/image/upload/v1736192680/eventos/iruoejwpglwsliyprkm6.png',
//     category: 'Música',
//     vipprice: 100,
//     economyprice: 50,
//   },
//   // Add more events here...
// ];
const HomeScreen = () => {
 const navigation = useNavigation();
 const { t } = useTranslation();
 const selectedBgColor = useSelector((state) => state.country.bgColor);
 const selectedCountry = useSelector((state) => state.country.selectedCountry);

   // State for storing categories, products, and brands
  //  const [categories, setCategories] = useState([]);
  const [events, setEvents] = React.useState([]);
  const [brands, setBrands] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
   const [loading, setLoading] = useState(false);
   const inputRef = useRef();

   const [searchResults, setSearchResults] = useState({ Categories: [], Products: [], Brands: [] });
   const [isModalVisible, setModalVisible] = useState(false);
   const [countriesLoading, setCountriesLoading] = useState(false);
   const [countriesData, setCountriesData] = useState({});

   const [searchLoading, setSearchLoading] = useState(false); // Loading state

   const fetchData = async () => {
    setLoading(true); // Set loading state to true
    try {
      const response = await axios.get("https://demoticket.inasnapmarketing.ai/api/v1/events/getAllEvents");
      setEvents(response.data.data);
    } catch (err) {
      console.log(err || "Something went wrong!"); // Handle errors
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);
 

 const handleFocus = () => {
  navigation.navigate('AllLists')// Navigate to the "AllListsScreen"
  };
  
 // Function to handle search
 const handleSearch = async (query) => {
  
  // Set the search query to the current input
  setSearchQuery(query);

  // If there's any input
  if (query) {
    setSearchLoading(true); 
      try {
        const response = await axios.get(`https://boy.ranaafaqali.com/api/products/search?Search=${query}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setSearchLoading(false);
      }
  
  } else { 
    setSearchResults({ Categories: [], Products: [], Brands: [] });

  }
};
  
const closeSearchModal = () => {
  setModalVisible(false); // Close the modal
  console.log('Closing modal');
  setSearchQuery(''); // Clear search query
  setSearchResults({ Categories: [], Products: [], Brands: [] });
  setModalVisible(false); // Close the modal
};
 const openSearchModal = () => {
    setModalVisible(true); // Open the modal when search container is clicked
  };

  const navigateToAllLists = (section) => {
    navigation.navigate('AllLists', { section });
  };

  const renderReviewCard = ({ item }) => (
    <View
      style={{
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
      }}
    >
      <Image
        source={item.imgSrc }
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          alignSelf: 'center',
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          fontSize: 14,
          color: '#555',
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        {item.review}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#333',
          marginBottom: 5,
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: '#777',
          textAlign: 'center',
        }}
      >
        {item.title}
      </Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2A2A35" barStyle="light-content" />
     
      <View style={{...styles.header, backgroundColor: selectedBgColor || '#2A2A35'}}>
        <View style={styles.subHeader}>
        
          {/* <Image
                  source={require('../assets/home_dots.png')}
                  style={{width: 20, height: 20}}
                /> */}
                {/* <CountryDropdown/> */}
              
        </View>
                <TouchableOpacity  onPress={handleFocus}
            style={styles.searchContainer}>

<Text  style={styles.textInput}>Buscar evento por nombre/ubicación 🔍</Text>
            <View>
              <Image
                source={require('../assets/filter.png')}
                style={{width:20, height: 20}}
              />

            </View>
          </TouchableOpacity>

        </View>

       { loading && (
         <ActivityIndicator size="large" color="#3795D6" style={{ marginTop: 20 }} />
       
        ) 
       }

{ !loading && (
        <ScrollView style={{backgroundColor :'#fff'}}> 
        <View style={styles.categoriesSection}>
          <View style={styles.sectionHeader}>
            {/* <Text style={styles.sectionTitle}>Categories</Text> */}
            <Text style={styles.sectionTitle}>Categorías</Text>

            {/* <TouchableOpacity onPress={() => navigateToAllLists('categories')}>

<Text style={styles.seeAll} >{t('see_all')}</Text>

</TouchableOpacity>           */}

          </View>

          <FlatList
      horizontal
      data={categories}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          // onPress={() => navigation.navigate('CategoryDetail', { category: item })}
          style={{
            marginRight: 6,
            alignItems: 'center',
            justifyContent: 'center',
            width: 100, // Set width of each category item to create enough space for scrolling
            background:'#f0f8ff',
            borderWidth: 1,
            borderColor: '#a8cce6',
            paddingBottom: 8,
            borderRadius: 8
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
           <Image
            source={require('../assets/drawer_icons/categories_icon.png')}
          style={{ width: wp(8), height: hp(8), resizeMode: 'contain' }}
        />
          </View>
          <Text
            style={{
              marginTop: 5,
              fontSize: 14,
              fontWeight: 'bold',
              color: '#333',
            }}
            numberOfLines={1}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      ListEmptyComponent={<Text style={{ fontStyle: 'italic' }}>No categories available</Text>}
    />
        </View>
        
        <View style={styles.needSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Eventos populares
            </Text>
            <TouchableOpacity onPress={() => navigateToAllLists('products')}>

<Text style={styles.seeAll} >Ver todo</Text>
</TouchableOpacity>   
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.needScroll}>
           
          {Array.isArray(events) && events?.length > 0 ? (
       
       events.map((event, index) => (
              <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', {eventInfo: event})} key={index}>
                 <EventCard event={event} />

                </TouchableOpacity>
              ))
            ): 
              (
                <Text style={{fontStyle: 'italic'}}>No hay productos disponibles
</Text> 
              )
            }
          </ScrollView>
        </View>
        
        <View style={styles.brandsSection}>
          <View style={styles.sectionHeader}>
            <Text style={{...styles.sectionTitle, textAlign: 'center'}}>Reseñas</Text>
              
          </View>
        
           
                       <FlatList
      data={mockReviews}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderReviewCard}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}
    />
           
          </View>
       {/* Modal for Search Results */}
       <Modal
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={closeSearchModal}

        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TextInput
              ref={inputRef}
              onLayout={()=> inputRef.current.focus()}
                style={{...styles.textInput, color: 'grey'}}
                value={searchQuery}
                placeholder={t('search_brand_product_category')}
                placeholderTextColor="#999"
                autoFocus={true}  // This will open the keyboard automatically

                onChangeText={handleSearch}
                onFocus={handleFocus} // Navigate when the input gains focus
              />
              <TouchableOpacity onPress={closeSearchModal}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/59/59836.png' }}
                  style={{ width: 20, height: 20, tintColor: 'grey' }}
                />
              
              </TouchableOpacity>
            </View>

            {searchLoading ? (
              <View style={{flex: 1, paddingHorizontal: 10}}>
              {/* <ActivityIndicator size="small" color="grey" />
              <Text style={{fontSize: 11}}>Loading results...</Text> */}
               <FlatList
              data={[1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]} // Placeholder data for skeleton
              numColumns={3}
             
              renderItem={() => (
                <Box alignItems="center" padding={2}>
                  <Skeleton width={100} height={50} borderRadius="10" />
                </Box>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            </View>
          ) :  (
            <ScrollView>
            <View style={{ flex: 1, padding: 10 }}>
  {/* Render Categories */}
  {searchResults.Categories?.length > 0 && (
    <View>
               <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal:15}}>

            <Text style={{...styles.sectionTitle, marginLeft: 3, marginBottom: 5, color: 'red'}}>{t('categories_title')}</Text>
            <TouchableOpacity onPress={() => {
                        setModalVisible(false);
                        navigateToAllLists('categories')
                    }}>

{/* <Text style={styles.seeAll} >See all</Text> */}
<Text style={{...styles.seeAll,  color: 'red'}} >Ver todo
</Text>

</TouchableOpacity> 
</View>
    <FlatList
      data={searchResults.Categories}
      renderItem={({ item: category }) => (
        <TouchableOpacity onPress={() => {
          setModalVisible(false);
          navigation.navigate('CategoryDetail', { category: category});
        }}
          style={{
            flexBasis: '30%',  // Takes 30% width for 3 items in a row
            margin: '1.5%',    // Small margin to space items
            justifyContent: 'center',
            alignItems: 'center',
            
            backgroundColor: '#f0f8ff'
          }}
        >

<View key={category.id} style={{marginVertical: 3,}}>
    <Image source={{ uri: category?.category_image }} style={{width: 35, height: 30, resizeMode: 'contain'}} />

  
  {/* {category.name.length > 7 ? (
    <MarqueeText
      style={{...styles.categoryName, textAlign: 'center'}}
      speed={0.05}
      marqueeOnStart={true}
      loop={true}
      delay={1000}
    >
      {category.name}
    </MarqueeText>
  ) : (
    <Text style={{...styles.categoryName, textAlign :'center'}} numberOfLines={1}>
      {category.name}
    </Text>
  )} */}
  {category.name.split(' ')?.length > 8 ? (
  <Text style={{ ...styles.categoryName }} numberOfLines={1}>
    {category.name.split(' ').slice(0, 8).join(' ')}...
  </Text>
) : (
  <Text style={{ ...styles.categoryName }} numberOfLines={1}>
    {category.name}
  </Text>
)}

</View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
    />
    </View>
  )}

  



                {/* Render Brands */}
                {searchResults.Brands?.length > 0 && (
                  <View>
                                   <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal:15,  }}>

                    <Text style={{...styles.sectionTitle, marginTop: 5, marginBottom: 2, color: 'red'}}>{t('brands_title')}</Text>
                   
                   
                    <TouchableOpacity onPress={() => {
                        setModalVisible(false);
                        navigateToAllLists('brands')
                    }}>

{/* <Text style={styles.seeAll} >See all</Text> */}
<Text style={{...styles.seeAll,  color: 'red'}} >{t('see_all')}</Text>

</TouchableOpacity> 
</View>
                   
                    
                     <FlatList
      data={searchResults.Brands}
      renderItem={({ item: brand }) => (
        <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
           navigation.navigate('BrandDetail', { brandInfo: brand});
        }} 
          style={{
            flexBasis: '30%',  // Takes 30% width for 3 items in a row
            margin: '1.5%',    // Small margin to space items
            justifyContent: 'center',
            alignItems: 'center',
           
            
            // backgroundColor: '#f0f8ff'
          }}
        >


<View key={brand.id} style={{...styles.resultItem,   backgroundColor: '#f0f8ff', borderWidth: 1, borderColor: '#D9D9D9',padding: 4,borderRadius: 6,width:105}}>
                        <Image source={{ uri: brand.brand_image }} style={{...styles.resultImage, width:30, height: 30}} />
                        <Text style={styles.resultTitle}>{brand.name}</Text>
                        </View>


        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
    />
                  </View>
                )}

                {/* Render Products */}
                {searchResults.Products?.length > 0 && (
                  <View>
                                   <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal:15}}>

                    <Text style={{...styles.sectionTitle, marginTop: 5, marginBottom: 2, color: 'red'}}>{t('product_title')}</Text>
                   
                    <TouchableOpacity onPress={() => {
                        setModalVisible(false);
                        navigateToAllLists('products')
                    }}>

{/* <Text style={styles.seeAll} >See all</Text> */}
<Text style={{...styles.seeAll,  color: 'red'}} >{t('see_all')}</Text>

</TouchableOpacity> 
</View>
                    {/* {searchResults.Products.map((product) => (
                      <TouchableOpacity  onPress={() => {
                        setModalVisible(false);
                         navigation.navigate('ProductDetailScreen', {productInfo: product});
                      }} >
                        <View key={product.id} style={styles.resultItem}>

                       
                        <Image source={{ uri: product.logo }} style={styles.resultImage} />
                        <Text style={styles.resultTitle}>{product.product_name}</Text>
                        </View>
                      </TouchableOpacity>
                    ))} */}
                     {/* <FlatList
      data={searchResults.Products}
      renderItem={({ item: product }) => (
        <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
           navigation.navigate('ProductDetailScreen', {productInfo: product});
        }} 
          style={{
            flexBasis: '22%',  // Takes 30% width for 3 items in a row
            margin: '1.9%',    // Small margin to space items
            justifyContent: 'center',
            alignItems: 'center',
            
            
            // backgroundColor: '#f0f8ff'
          }}
        >


<View key={product.id} style={{borderWidth: 1,   backgroundColor: '#f0f8ff',borderColor: '#D9D9D9',padding: 2,borderRadius: 6, display: 'flex', alignItems:'center'}}>

                       
<Image source={{ uri: product.logo }} style={{...styles.resultImage, marginRight: 0}} />
<Text style={{...styles.resultTitle, textAlign: 'center'}}>{product.product_name}</Text>

                        </View>


        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
    /> */}
     <FlatList
      data={searchResults.Products}
      renderItem={({ item: product }) => (
        <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
           navigation.navigate('ProductDetailScreen', { productInfo: product});
        }} 
          style={{
            flexBasis: '30%',  // Takes 30% width for 3 items in a row
            margin: '1.5%',    // Small margin to space items
            justifyContent: 'center',
            alignItems: 'center',
           
            
            // backgroundColor: '#f0f8ff'
          }}
        >


<View key={product.id} style={{...styles.resultItem,   backgroundColor: '#f0f8ff', borderWidth: 1, borderColor: '#D9D9D9',padding: 3,borderRadius: 6, width:105}}>
                        <Image source={{ uri: product.logo }} style={{...styles.resultImage, width:30, height: 30}} />
                        <Text style={styles.resultTitle}>
        {product.product_name && product.product_name?.length > 8 
          ? `${product.product_name.slice(0, 8)}...`  
          : product.product_name}                     
      </Text>
             </View>


        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
    />
                  </View>
                )}
              </View>
            </ScrollView>
          )}
          </SafeAreaView>
        </Modal>
      </ScrollView>
)}


    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
   
   
    paddingHorizontal: 10,
    // paddingVertical: 15,
    paddingTop:2,
    paddingBottom: 15

  },
  subHeader : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  headerLocation: {
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  searchContainer: {
    marginTop: 10,
    paddingHorizontal:5,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
 },
 listContent: {
  paddingVertical: 20,
  paddingHorizontal: 10,
  alignItems: 'center',
},
 
    textInput: {
    borderWidth: 1,
    width: wp('80%'),
    borderRadius: 6,
    borderColor: 'grey',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    fontSize: 13,
    color: 'grey',
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 3,
  },
 
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    color: 'black',
fontSize: 16,
fontFamily: 'Poppins',
fontWeight: '700',
wordWrap: 'break-word'
  },
  seeAll: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Poppins',
fontWeight: '700'
  },
  categoriesSection: {
    marginTop: 10,
    marginBottom: 6
  },
  categoriesScroll: {
    paddingLeft: 16,
    
  },
  cardCategory:{
    flexDirection: 'row',
    alignItems: 'center',
    // maxWidth:'50%',
    paddingRight:10,
   
    borderRadius: 30, // Rounded corners
    backgroundColor: '#f0f8ff', // Default background color
    borderWidth: 2,
    borderColor: '#E0E0E0',
     marginRight: 8
  },
  categoryItem: {
    width: 50,
     height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    width: 80,
  },
  needSection: {
    marginVertical: 3,
    
    
  },
  needScroll: {
    paddingLeft: 16,
    
  },
  needItem: {
    marginRight: 12,
  },
  needImage: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
  brandsSection: {
    marginVertical: 5,
  },
  brandsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 16,
    paddingHorizontal: 16,
  },
  brandItem: {
    width: '48%',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  brandLogo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  brandName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 11,
    paddingTop: 20,
    justifyContent: 'center'
  },
  resultsContainer: {
    paddingHorizontal: 26,
    paddingTop: 13
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  resultImage: {
    width: 40,
    height: 40,
    marginRight: 4,
    borderRadius: 10, // Adjusted for circular shape
    resizeMode: 'contain', // Ensures the logo is properly resized
  },
  resultTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#006400',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  globeIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  separator: {
    width: 1,
    height: '60%',
    backgroundColor: '#fff',
    marginHorizontal: 7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    marginRight: 6,
  },

});

export default HomeScreen;




// import React from 'react'
// import { View } from 'react-native'
// import LanguageSwitcher from '../component/LanguageSwitcher'

// const HomeScreen = () => {
//   return (
//     <View>
//       <LanguageSwitcher/>
//     </View>
//   )
// }

// export default HomeScreen
