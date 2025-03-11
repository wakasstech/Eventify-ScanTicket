import * as React from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

// // Mock image data

const renderCarouselItem = ({ item }) => (
  <View style={styles.carouselItem}>
    <Image source={{ uri: item.url }} style={styles.carouselImage} />
    {/* <Text style={styles.carouselText}>{item.title}</Text> */}
  </View>
);
function CarouselImages({ images, onImagePress, setCarouselIndex }) {
  // const [carouselIndex, setCarouselIndex] = React.useState(0);

    return (
        <View style={{ flex: 1 }}>
            <Carousel
        loop
        width={width * 1}
        height={200}
       
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCarouselIndex(index)}
        renderItem={renderCarouselItem}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1.0,
          parallaxScrollingOffset: 216,
          parallaxAdjacentItemScale: 0.45,
        }}
      />
        </View>
    );
}



export default CarouselImages;

const styles = StyleSheet.create({
  carouselItem: {
    alignItems: 'center',
  },
  carouselImage: {
    width: width * 0.9,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain'
  },
});
// import * as React from 'react';
// import { BackHandler, Dimensions, Image, TouchableOpacity, View } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';

// // Mock image data
// const images = [
//   {  url: 'http://res.cloudinary.com/ddjqflks0/image/upload/v1728310437/Bycottapp/Products/productLogos/2024-10-07/ve1zq8uubshev3pkn37i.png ' },
//   { url:'http://res.cloudinary.com/ddjqflks0/image/upload/v1728310887/Bycottapp/Products/productLogos/2024-10-07/j8phrsnxndzm7aagrezb.png' },
//   {url: 'http://res.cloudinary.com/ddjqflks0/image/upload/v1728311056/Bycottapp/Products/productLogos/2024-10-07/xyut2ohttinfyt0bvjkc.png' },
//   {"url": "http://res.cloudinary.com/ddjqflks0/image/upload/v1728544704/Bycottapp/Products/productLogos/2024-10-10/jfscz4t0jt462d7blz8u.png"}, 
//   {"url": "http://res.cloudinary.com/ddjqflks0/image/upload/v1728544884/Bycottapp/Products/productLogos/2024-10-10/hohuhwrblj6ypqxddsvu.png"},
//   {"url": "http://res.cloudinary.com/ddjqflks0/image/upload/v1728545396/Bycottapp/Products/productLogos/2024-10-10/q8qaefiqfxfo5e7jhotd.png"},

// ];



// function CarouselImages({ onImagePress }) {
//   const width = Dimensions.get('window').width;
//    console.log(images)
//   return (
//     <View>
//       <Carousel
//         loop
//         width={width}
//         height={width / 2}
//         autoPlay={true}
//         mode={"parallax"}
//         parallaxScrollingScale={0.9}
//         parallaxScrollingOffset={50}
//         data={images}
//         scrollAnimationDuration={100}
//         onSnapToItem={(index) => console.log('current index:', index)}
//         renderItem={({ index }) => {
//           const leftIndex = (index - 1 + images.length) % images.length; // Previous image index
//           const rightIndex = (index + 1) % images.length; // Next image index

//           return (
//             <View style={styles.carouselContainer}>
//               {/* Left Image */}
//               <View style={styles.leftRightImageContainer}>
//                 <Image
//                   style={styles.smallImage}
//                   source={{ uri: images[leftIndex].url }}
//                 />
//               </View>
//               {/* Main Middle Image */}
//               <TouchableOpacity style={styles.mainImageContainer} onPress={() => onImagePress(images[index].url)}> 
//                 <Image style={styles.mainImage} source={{ uri: images[index].url }} />
//               </TouchableOpacity>
//               {/* Right Image */}
//               <View style={styles.leftRightImageContainer}>
//                 <Image
//                   style={styles.smallImage}
//                   source={{ uri: images[rightIndex].url }}
//                 />
//               </View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// }


// const styles = {
//   carouselContainer: {
//     flexDirection: 'row',  // Arrange images horizontally
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
    
//     // backgroundColor: 'green',
//     // borderTopWidth: 0.5,          // Top border width
//     // borderBottomWidth: 0.5,       // Bottom border width
//     // borderBlockStartColor :'#fff',
//     // borderBlockEndColor :'#fff',
   
    
//   },
//   leftRightImageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   mainImageContainer: {
//     flex:1, // Main image will take twice the space
//     justifyContent: 'center',
//     alignItems: 'center',
  
   
//   },
//   smallImage: {
//     width: '50%',   // Smaller image size
//     height: '50%',
//     resizeMode: 'cover',
//   },
//   mainImage: {
//     width: '100%',   // Full size for the middle image
//     height: '100%',
//     resizeMode: 'cover',
//   },
// };

// export default CarouselImages;
