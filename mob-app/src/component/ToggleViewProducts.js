import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CommonProductCard from './CommonProductCard';
import CommonProductCardToggle from './CommonProductCardToggle';
import { useSelector } from 'react-redux';

// Function to group products by category
const groupByCategory = (products) => {
  return products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
};

const ToggleViewProducts = ({ products }) => {
  const groupedProducts = groupByCategory(products);
  const selectedBgColor = useSelector((state) => state.country.bgColor);

  return (
    <View>
      {Object.keys(groupedProducts).map((category, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={{...styles.categoryTitle, color:  selectedBgColor || '#3C3B6E'}}>{category}</Text>
          <FlatList
            data={groupedProducts[category]}
            renderItem={({ item }) => <CommonProductCardToggle product={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
          />
        </View>
      ))}
     
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginBottom: 14,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    
    marginBottom: 9,
  },
});

export default ToggleViewProducts;
