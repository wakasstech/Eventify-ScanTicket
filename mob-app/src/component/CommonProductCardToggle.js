
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import MarqueeText from 'react-native-marquee';

const CommonProductCardToggle = ({product, withoutCategory}) => {
  const navigation = useNavigation();
  function hexToRgba(hex, opacity) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', {productInfo: product})}
  style={{marginBottom: 10}}> 
     
    <View  style={[styles.card, {backgroundColor: product?.bgColor}]}>
    {!withoutCategory && (
        <View style={styles.categoryContainer}>
          {product?.category?.length > 7 ? (
            <MarqueeText
              style={styles.categoryText}
              speed={0.06 }
              marqueeOnStart={true}
              loop={true}
              delay={1000}>
              {product?.category}
            </MarqueeText>
          ) : (
            <Text style={styles.categoryText}>{product?.category}</Text>
          )}
        </View>
      )}

      <View style={styles.logoContainer}>
        <Image source={{uri: product.brand_logo}} style={styles.logo} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.product_image}} style={styles.image} />
       
      </View>
    </View>

    <View>
    <Text style={styles.text}>{product.product_name}</Text>
    </View>
   
    
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxWidth: Dimensions.get('window').width / 3 - 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    paddingHorizontal: 13.5,
    paddingVertical: 10,
    margin: 3,
   
    position: 'relative',
  },
  categoryContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 5,
    width: 44, // Fixed width for the category container
    height: 16, // Fixed height for category container
    justifyContent: 'center', // Vertically center the text
    overflow: 'hidden', // Ensure the text is confined within the container
  },
  categoryText: {
    fontSize: 8,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  logoContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 20
   
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 20,
    resizeMode: 'contain', // Ensures the logo is properly resized
  },
  imageContainer: {
    marginTop: 22,
    marginBottom: 0,
    alignItems: 'center',
   
    
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 0,
    resizeMode: 'contain', // Ensures the logo is properly resized
  },
  text: {
    color: 'black',
    fontSize: 13.5,
    fontWeight: '700',
    
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CommonProductCardToggle;
