// // BrandCard.js

// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const BrandCard = ({ location, rating, brand_image, name, products }) => {

//   const renderProducts = () => {
//     const firstLine = products.slice(0, 5).join(', ');
//     const secondLine = products.slice(5).join(', ');
//     return (
//       <>
//         <Text style={styles.productText}>• {firstLine}</Text>
//         {secondLine && <Text style={styles.productText}>• {secondLine}...</Text>}
//       </>
//     );
//   };

//   return (
//     <View style={styles.card}>
//       <View style={styles.header}>
//         <View style={styles.locationContainer}>
//         <Image
//                   source={require('../assets/location-icon.png')}
//                   style={{width: 20, height: 20}}
//                 />
//           <Text style={styles.locationText}>{location}</Text>
//         </View>
//         <View style={styles.ratingContainer}>
//           {[1, 2, 3, 4, 5].map((_, index) => (
//             <View key={index} style={styles.ratingDot} />
//           ))}
//           <Text style={styles.ratingText}>{rating}+</Text>
//         </View>
//       </View>
//       {/* <View style={{backgroundColor: '#AE1617', paddingBottom:10}}>
//       <Image source={{ uri: brand_image }} style={styles.brand_image} />

//       </View> */}
//        <View className={styles.backgroundlogo}>
//             <View className={styles.brand_image}>
//                 <Image source={{ uri: brand_image }} style={{width: '100px', height: 'auto'}} />
//             </View>
//         </View>
//       <View style={styles.content}>
       
//         <Text style={styles.title}>{name}</Text>
//         <View style={styles.productList}>
//           {renderProducts()}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     marginRight: 11,
//     overflow: 'hidden',
//     width: 300,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   header: {
//     backgroundColor: '#AE1617',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   locationText: {
//     color: 'white',
//     marginLeft: 5,
//     fontSize: 16,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratingDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: 'white',
//     marginHorizontal: 2,
//   },
//   ratingText: {
//     color: 'white',
//     marginLeft: 5,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   content: {
//     padding: 15,
//   },
//   backgroundlogo : {
//     backgroundColor: '#e63946', /* Background color */
//     height: '100vh',            /* Full viewport height */
//     position: 'relative',       /* Relative positioning for child elements */
// },
//   brand_image: {
//     position: 'absolute',        /* Positioning for brand_image */
//     bottom: '20px',             /* Distance from the bottom */
//     left: '20px',  
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   productList: {
//     marginTop: 10,
//   },
//   productText: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
// });

// export default BrandCard;
// BrandCard.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const BrandCard = ({ location, rating, brand_image, name, products, bgColor }) => {
  const renderProducts = () => { 
    const firstLine =  products?.slice(0, 3).map(product => product.product_name).join(' • ');
    const secondLine = products?.slice(3, 6).map(product => product.product_name).join(' • ');
    return (
      <>
       {/* {firstLine &&  <Text style={styles.productText}>• {firstLine}</Text> }
        {secondLine && <Text style={styles.productText}>• {secondLine}...</Text>} */}
        <Text style={styles.productText}>•Coffee mate •DairyPure •Hirz •yogurt</Text>
        <Text style={styles.productText}>•Clasico •creame •cosmatics •crest</Text>
     
      </>
    );
  };
// Array of RGB colors for each circle
const ratingColors = [
  'rgb(255, 99, 71)',  // Red
  'rgb(255, 165, 0)',  // Orange
  'rgb(60, 179, 113)', // Green
  'rgb(30, 144, 255)', // Blue
  '#fff' // Purple
];
function hexToRgba(hex, opacity) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
  return (
    <View style={styles.card}>
      <View style={{...styles.header,  backgroundColor:  hexToRgba(bgColor, 0.7)}}>
        <View style={styles.locationContainer}>
          <Image
            source={require('../assets/location-icon.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.locationText}>{location || 'Pakistan'}</Text>
        </View>
        <View style={styles.ratingContainer}>
          {/* {[1, 2, 3, 4].map((_, index) => (
            <View key={index} 
            style={[
              styles.ratingDot,
              { backgroundColor: ratingColors[index] } // Assign different background colors
            ]}
            />
          ))} */}
           {[...Array(5)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.ratingDot,
                { backgroundColor: ratingColors[index]} // Assign different background colors
              ]}
            >
              {/* Conditionally render text for the last circle */}
              {index === 4 && <Text style={styles.circleText}>{products?.length}+</Text>}
            </View>
          ))}
          {/* <Text style={styles.ratingText}>{rating}+</Text> */}
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Image source={{ uri: brand_image }} style={styles.brand_image} />
      </View>
      <View style={styles.content}>

        <View style={styles.titleContainer}>
        
        <Image
                    source={require('../assets/compeny.png')}
                    style={styles.titleIcon}
                  />
        <Text style={styles.title}>{name}</Text>

        </View>
        <View style={styles.productList}>{renderProducts()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 11,
    overflow: 'hidden',
    width: 275,
    height: 190,    marginBottom: 20,
    borderColor: '#d3d3d3',
    borderWidth: 0.5,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    //  elevation: 0.5,
  },
  header: {
   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 40, // Increased to accommodate the brand_image
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  locationText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#',  // Adjust with different colors for each circle
    marginLeft: -11,  // Overlap the circles
    // width: 8,
    // height: 8,
    // borderRadius: 4,
    // backgroundColor: 'white',
    // marginHorizontal: 2,
  },
  // ratingText: {
  //   color: 'black',
  //   // marginLeft: 5,
  //   backgroundColor: '#fff',
  //   borderRadius: 30,
  //   fontSize: 12,
  //   fontWeight: 'bold',
  // },
  circleText: {
    color: 'black',  // Set text color
    fontSize: 10,    // Adjust font size for the text inside the circle
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 1,
  },
  brand_image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    resizeMode: 'contain', // Ensures the logo is properly resized
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  content: {
    padding: 15,
    paddingTop: 30, // Increased to accommodate the brand_image
  },
  titleContainer:{
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center', // Center align items vertically
    marginBottom: 5
    // marginLeft: 3, // Space between icon and text
  },
  titleIcon:{
    width: 18,
    height: 21,
    // marginRight: 3, // Space between icon and text
    // tintColor: 'white',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  productList: {
    marginTop: 5,
  },
  productText: {
    fontSize: 13,
    color: 'black',
    marginBottom: 5,
  },
});
export default BrandCard;
