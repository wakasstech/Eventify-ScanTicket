import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const BrandCardCommon = ({ brand }) => {
  const navigation = useNavigation();
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
    <TouchableOpacity onPress={() => navigation.navigate('BrandDetail', { brandInfo: brand})}> 
    <View style={[styles.brandCard, { backgroundColor:  hexToRgba(brand?.bgColor, 0.5) || '#e6f0ff' }]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: brand.brand_image }}
          style={styles.brandImage}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.brandName}>{brand.name}</Text>
        <Text style={styles.brandProducts}>
        {/* {brand?.products?.slice(0, 5).map(product => product.product_name).join(', ')}..        </Text> */}
        Coffee mate, DairyPure, Hirz, yogurt, 
Clasico, creame, cosmatics, crest </Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.locationText}>
            <Image source={require('../assets/location-icon.png')} style={styles.icon} />
            {(brand.country_name && brand.country_name.length > 8) ? `${brand.country_name.slice(0, 8)}...` : (brand.country_name || 'American')}       
               </Text>
          <View style={styles.totalBrandsContainer}>
         
            {[...Array(5)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.ratingDot,
                { backgroundColor: ratingColors[index]} // Assign different background colors
              ]}
            >
              {/* Conditionally render text for the last circle */}
              {index === 4 && <Text style={styles.circleText}>{brand?.products?.length}+</Text>}
            </View>
          ))}
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  brandCard: {
    paddingVertical: 10,
    paddingHorizontal: 12,

    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 37.5, // Half of the width/height for circular shape
    overflow: 'hidden', // Ensures image stays within circular bounds
    marginRight: 16,
  },
  brandImage: {
    width: '100%',   // Full size for the middle image
    height: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
  },
  brandName: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  brandProducts: {
    fontSize: 12,
    color: '#000',
    marginTop: 3,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  locationText: {
    fontSize: 12,
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 6,
    paddingBottom: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.50)'
  },
  totalBrandsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalBrandsText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
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
  circleText: {
    color: 'black',  // Set text color
    fontSize: 10,    // Adjust font size for the text inside the circle
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2
  },

});

export default BrandCardCommon;
