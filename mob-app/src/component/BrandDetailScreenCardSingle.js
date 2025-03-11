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
    <TouchableOpacity  onPress={() => navigation.navigate('BrandDetail')}> 
    <View style={[styles.brandCard, { backgroundColor:  brand?.bgColor  }]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: brand.brand_image }}
          style={styles.brandImage}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.brandName}>{brand.name}</Text>
        <Text style={styles.brandProducts}>
        {/* {brand.products.slice(0, 5).map(product => product.product_name).join(', ')}..      */}
        Coffee mate, DairyPure, Hirz, yogurt, 
Clasico, creame, cosmatics, crest..  
         </Text>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.locationText}>
            <Image source={require('../assets/location-icon.png')} style={{...styles.icon, tintColor: 'black'}} />
            {(brand.country_name && brand.country_name.length > 8) ? `${brand.country_name.slice(0, 8)}...` : (brand.country_name || 'American')}       
               </Text>
        
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  brandCard: {
    padding: 8,
    marginVertical: 12,
   
    borderWidth: 3,
    borderColor: '#ddd',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30
  },
  brandImage: {
    width: 70,
    height: 70,
    borderRadius: 30, // To make it circular
    resizeMode: 'contain'
  },
  infoContainer: {
    flex: 1,
  },
  brandName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  brandProducts: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 8,
   
  },
  locationText: {
    fontSize: 12,
    color: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingBottom: 5,
    backgroundColor: 'white'
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
    width: 20,
    height: 20,
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
