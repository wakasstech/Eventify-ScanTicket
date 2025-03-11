// import React, { useState } from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';

// const { width } = Dimensions.get('window');

// // Mock Data for Blogs and Carousel Images
// const carouselImages = [
//   { id: 1, title: 'Free Palestine', image: 'https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25038633/GettyImages_1727389262.jpg?quality=90&strip=all&crop=0%2C0.024402147388969%2C100%2C99.951195705222&w=2400' },
//   { id: 2, title: 'Freedom, Justice', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7tfvwBsog_zNVNV-uKjw8bCQpcnc2aPyuw&s' },
//   { id: 3, title: 'Boycoot ', image: 'https://cdn.britannica.com/15/255015-050-0245E384/bundestag-bds-compaign-protest.jpg' },
// ];

// const mockBlogs = [
  
//     {
//       id: 1,
//       title: 'Coca-Cola’s Partnership with Israel',
//       date: '10 October, 2023 — 12:15 PM',
//       image: 'https://www.coca-cola.com/content/dam/onexp/pk/en/sustainability/in-our-products/coca-cola-bottles.png',
//       content: 'Coca-Cola has had significant investments in Israel, leading to controversies in certain regions. As a global company operating in 206 countries with diverse economic, political and religious backgrounds, The Coca‑Cola Company does not support any country, government or policy, political or religious belief. In this context, the claim that Coca‑Colas income is transferred to Israel is false.',
//       relatedProducts: ['Coca-Cola', 'Sprite', 'Fanta'],
//     },
//     {
//       id: 2,
//       title: 'Nestle: Israel’s Key Food Provider',
//       date: '17 September, 2023 — 09:30 AM',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Byl4MyH8K5HpZ__Ajk0kQJPXj_OcDq_fbw&s',
//       content: 'Nestle has been a significant player in Israel’s food industry, owning companies like Osem...',
//       relatedProducts: ['KitKat', 'Maggi', 'Nescafé'],
//     },
//     {
//       id: 3,
//       title: 'Intel Israel: Innovation Hub',
//       date: '02 September, 2023 — 10:00 AM',
//       image: 'https://media.licdn.com/dms/image/D4E12AQFLgP1Zx-zHtQ/article-cover_image-shrink_720_1280/0/1722797722856?e=2147483647&v=beta&t=huSSNM9sMWwVYf6hQrlv-qT_Wq-uPCLtvv7bhLO7BJA',
//       content: 'Intel’s operations in Israel have created thousands of jobs and contributed to the country’s tech sector...',
//       relatedProducts: ['Intel Processors', 'Pentium', 'Celeron'],
//     },
//     {
//       id: 4,
//       title: 'Teva Pharmaceuticals: A Global Giant from Israel',
//       date: '15 August, 2023 — 03:15 PM',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0MNve6LZfVKFrAzHYPxVj1YrvE8JbXUajw&s',
//       content: 'Teva Pharmaceuticals is one of the largest generic drug manufacturers in the world, with strong ties to Israel...',
//       relatedProducts: ['Generic Medications', 'Teva Products'],
//     },
//     {
//       id: 5,
//       title: 'The SodaStream Controversy',
//       date: '25 July, 2023 — 05:00 PM',
//       image: 'https://images.fastcompany.com/image/upload/f_webp,q_auto,c_fit/fc/3005420-poster-inline-1-see-rejected-sodastream-superbowl-ad.jpg',
//       content: 'SodaStream has faced criticism for its factory location in Israeli settlements...',
//       relatedProducts: ['SodaStream Machines', 'CO2 Canisters'],
//     },
//     {
//       id: 6,
//       title: 'Checkpoint Software: Securing Israel and Beyond',
//       date: '12 July, 2023 — 11:45 AM',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbcbrHsGzNUqfQBU5vts8e6OW0WYTlfxkEA&s',
//       content: 'Checkpoint Software is a global leader in cybersecurity, with its roots in Israel...',
//       relatedProducts: ['Firewall Software', 'Cloud Security Solutions'],
//     },
  
  
// ];

// // Blog List Screen Component
// export default function BlogListScreen({ navigation }) {
//   const [carouselIndex, setCarouselIndex] = useState(0);

//   // Render Carousel Items
//   const renderCarouselItem = ({ item }) => (
//     <View style={styles.carouselItem}>
//       <Image source={{ uri: item.image }} style={styles.carouselImage} />
//       <Text style={styles.carouselText}>{item.title}</Text>
//     </View>
//   );

//   // Render Blog Card Items
//   const renderBlogItem = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('NewsDetail', { blog: item })}
//       style={styles.blogCard}>
//       <Image source={{ uri: item.image }} style={styles.blogImage} />
//       <View style={styles.blogContent}>
//         <Text style={styles.blogTitle}>{item.title}</Text>
//         <Text style={styles.blogDate}>{item.date}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Carousel */}
//       <View style={{marginBottom: 190}}>
//       <Carousel
//         loop
//         width={width * 0.9}
//         height={200}
       
//         autoPlay={true}
//         data={carouselImages}
//         scrollAnimationDuration={1000}
//         onSnapToItem={(index) => setCarouselIndex(index)}
//         renderItem={renderCarouselItem}
//         mode="parallax"
//         // modeConfig={{
//         //   parallaxScrollingScale: 0.7,
//         //   parallaxScrollingOffset: 200,
//         //   parallaxAdjacentItemScale: 0.50,
//         // }}
//       />
//       </View>
      

//       {/* Blog List */}
   

//      <View >
//      <FlatList
//         data={mockBlogs}
//         renderItem={renderBlogItem}
//         keyExtractor={(item) => item.id.toString()}
//         style={styles.blogList}
//       />
//      </View>
     
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   carouselItem: {
//     alignItems: 'center',
//   },
//   carouselImage: {
//     width: width * 0.9,
//     height: 200,
//     borderRadius: 10,
//   },
//   carouselText: {
//     position: 'absolute',
//     bottom: 10,
//     left: 20,
//     color: 'white',
//     fontSize: 22,
//     backgroundColor: 'red',
//     paddingHorizontal: 10,
//     borderRadius:5,
//     fontWeight: 'bold',
//   },
//   blogCard: {
//     flexDirection: 'row',
//     marginVertical: 5,
//     paddingVertical: 5,
//     paddingHorizontal:10,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//   },
//   blogImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   blogContent: {
//     flex: 1,
//   },
//   blogTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black'
//   },
//   blogDate: {
//     color: '#777',
//   },
//   blogList: {
//     marginTop: 20,
//     marginBottom:200
//   },
// });


import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const plans = [
  {
    title: 'Básico',
    features: [
      '🎉 Publicación de eventos',
      '🪑 Opciones de asientos',
      '🖼️ Imagen de banner',
      '🎫 Boleto con código QR',
    ],
    price: '$300.0',
  },
  {
    title: 'Estándar',
    features: [
      '📅 Múltiples eventos',
      '🗺️ 2 mapas de asientos',
      '⭐ Solicitudes destacadas (4x)',
      '📸 Galería de fotos',
      '🎫 Boleto con código QR',
    ],
    price: '$500.0',
  },
  {
    title: 'Premium',
    features: [
      '🎉 Publicación de eventos',
      '⭐ Solicitudes destacadas',
      '📸 Galería de fotos',
      '🎨 Asignación de asientos temáticos',
      '🚫 Eventos sin boleto electrónico',
      '🎫 Boleto con código QR',
    ],
    price: '$1000.0',
  },
];

const PricingPage = () => {
  const renderPlanCard = (plan, index) => (
    <View key={index} style={styles.card}>
      <Text style={styles.cardTitle}>{plan.title}</Text>
      <View style={styles.featuresList}>
        {plan.features.map((feature, i) => (
          <Text key={i} style={styles.feature}>
            {feature}
          </Text>
        ))}
      </View>
      <Text style={styles.price}>{plan.price}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Planes de Suscripción</Text>
      {plans.map((plan, index) => renderPlanCard(plan, index))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2A2A35', // Updated background color
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF', // White text for better contrast
  },
  card: {
    backgroundColor: '#3B3B4F', // Card background to match the theme
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700', // Golden color for card titles
    marginBottom: 10,
    textAlign: 'center',
  },
  featuresList: {
    marginBottom: 15,
  },
  feature: {
    fontSize: 16,
    color: '#E1E1E1', // Light gray for text
    marginBottom: 5,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50', // Green for price
    textAlign: 'center',
  },
});

export default PricingPage;
