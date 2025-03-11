import * as React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width, height } = Dimensions.get('window');

const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
    <Image source={{ uri: item.url }} style={styles.carouselImage} />
  </View>
);

function CarouselImages({ images, onImagePress, setCarouselIndex }) {
  return (
    <View style={styles.container}>
    <Carousel
      loop
      width={width}
      height={height}
      autoPlay={true}
      data={images}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => setCarouselIndex(index)}
      renderItem={renderCarouselItem}
    />
  </View>
  );
}

export default CarouselImages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      carouselImage: {
        width: width,
        height: '90%',
        resizeMode: 'contain',
      },
});


// import * as React from 'react';
// import { Dimensions, Image, StyleSheet, View } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';

// const { width, height } = Dimensions.get('window');

// const renderCarouselItem = ({ item }) => (
//     <View style={styles.carouselItem}>
//     <Image source={{ uri: item.url }} style={styles.carouselImage} />
//   </View>
// );

// function CarouselImages({ images, onImagePress, setCarouselIndex }) {
//   return (
//     <View style={styles.container}>
//     <Carousel
//       loop
//       width={width}
//       height={height}
//       autoPlay={true}
//       data={images}
//       scrollAnimationDuration={1000}
//       onSnapToItem={(index) => setCarouselIndex(index)}
//       renderItem={renderCarouselItem}
//     />
//   </View>
//   );
// }

// export default CarouselImages;

// const styles = StyleSheet.create({
//     container: {
//      height:'100%',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//        overflow: 'hidden', // Ensure content stays within bounds
      
//       },
//       carouselItem: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // width: '95%'
//       },
//       carouselImage: {
//         width: '90%', // Take the full width of the carousel item
//         height:"62%",
       
//   aspectRatio: 4 / 3, // Set the desired aspect ratio (3:2 in this case)
//   resizeMode: 'contain',
//       },
// });

