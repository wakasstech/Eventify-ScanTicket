import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MarqueeText from 'react-native-marquee';


const ProductCard = ({ category, brand_logo, logo, product_name, bgColor }) => {

  return (
    <View style={[styles.itemContainer, { backgroundColor: bgColor }]}>
    <View style={styles.header}>
      <View style={styles.categoryContainer}>
      {category.length > 7 ? (
          <MarqueeText
            style={styles.categoryText}
            speed={0.03}
            marqueeOnStart={true}
            loop={true}
            delay={1000}
          >
            {category}
          </MarqueeText>
        ) : (
          <Text style={styles.categoryText}>{category}</Text>
        )}
        {/* <Text style={styles.categoryText}>{category.length > 8 ? `${category.slice(0, 8)}...` : category}</Text> */}
      </View>
      <Image source={{ uri: brand_logo }} style={styles.brand_logo} />
    </View>
    <Image source={{ uri: logo }} style={styles.productImage} />
    <Text style={styles.product_name}>{product_name}</Text>
  </View>
  )
};
const styles = StyleSheet.create({
    itemContainer: {
        width: 130,
        height: 195,
        marginRight: 10,
        borderRadius: 0,
        paddingHorizontal: 5,
        paddingTop: 10,
        paddingBottom: 5,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },
      categoryContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 4,
          width: 70
        
      },
      categoryText: {
        color: '#878787',
        fontSize: 10,
        fontFamily: 'Poppins',
        fontWeight: '500',
        wordWrap: 'break-word'
      },
      brand_logo: {
        borderWidth: 0.5,
        borderColor: '#fff',
        width: 20, // Adjusted width for smaller logo size
        height: 20, // Adjusted height
        borderRadius: 10, // Adjusted for circular shape
        resizeMode: 'contain', // Ensures the logo is properly resized
        marginLeft: 5, // Adds some margin to align it well
      },
      productImage: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
      },
      product_name: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
      },
  });

export default ProductCard
