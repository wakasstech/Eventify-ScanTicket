import React from "react";
import { ScrollView, Image } from "react-native";
import { Box, Text, VStack, HStack, Divider, Button } from "native-base";

const ProductDetailScreen = ({ route }) => {
  const { productData } = route.params;

  const {
    commonName,
    brand,
    quantity,
    barcode,
    keyBenefit,
    categories,
    countries,
    storesLocated,
    ingredients,
    nutriments,
    images,
  } = productData;

  return (
    <ScrollView>
      <Box safeArea p="4" bg="#f5f5f5">
        {/* Product Image */}
        <Box bg="white" borderRadius="10" shadow="2" mb="5" p="4">
          <Image
            source={{ uri: images.productImage }}
            style={{
              height: 200,
              width: "100%",
              borderRadius: 10,
              marginBottom: 15,
            }}
            resizeMode="contain"
          />
          <Text fontSize="2xl" fontWeight="bold" color="#333">
            {commonName}
          </Text>
          <Text fontSize="md" color="gray.500">
            Brand: {brand}
          </Text>
        </Box>

        {/* Product Details */}
        <VStack space={4} bg="white" borderRadius="10" shadow="2" p="4">
          <HStack justifyContent="space-between">
            <Text fontSize="md" color="#555">
              Quantity: <Text bold>{quantity}</Text>
            </Text>
            <Text fontSize="md" color="#555">
              Barcode: <Text bold>{barcode}</Text>
            </Text>
          </HStack>

          <Divider my="2" />

          {/* <Box>
            <Text fontSize="lg" fontWeight="bold" color="#333" mb="2">
              Key Benefits
            </Text>
            <Text fontSize="md" color="#666">
              {keyBenefit}
            </Text>
          </Box> */}

          <Box>
            <Text fontSize="lg" fontWeight="bold" color="#333" mb="2">
              Categories
            </Text>
            <Text fontSize="md" color="#666">
              {categories.replace(/,/g, ", ")}
            </Text>
          </Box>

          <Box>
  <Text fontSize="lg" fontWeight="bold" color="#333" mb="2">
    Available in Countries
  </Text>
  <HStack flexWrap="wrap" justifyContent="space-between">
    {countries.split(",").map((country, index) => (
      <Box
        key={index}
        alignItems="center"
        borderWidth={1}
        borderColor="gray.300"
        borderRadius="5"
        p="2"
        mb="3"
        flexBasis={{ base: "45%", md: "30%" }} // Adjust for responsiveness
        textAlign="center"
      >
        <Image
          source={{
            uri: `https://flagcdn.com/w40/${country
              .trim()
              .toLowerCase()
              .slice(0, 2)}.png` || `https://cdn-icons-png.flaticon.com/512/6000/6000197.png`, // Default URI if flag not found
          }}
          alt={`${country} flag`}
          style={{ height: 20, width: 30 }}
          resizeMode="contain"
        />
        <Text fontSize="md" color="#666" mt="1">
          {country.trim()}
        </Text>
      </Box>
    ))}
  </HStack>
</Box>




          <Box>
            <Text fontSize="lg" fontWeight="bold" color="#333" mb="2">
              Ingredients
            </Text>
            <Text fontSize="md" color="#666">
              {ingredients}
            </Text>
          </Box>
        </VStack>

        {/* Nutritional Information */}
        <Box mt="5" bg="white" borderRadius="10" shadow="2" p="4">
          <Text fontSize="lg" fontWeight="bold" color="#333" mb="2">
            Nutritional Information
          </Text>
          <VStack space={2}>
            <Text>Fat: {nutriments.fat}</Text>
            <Text>Salt: {nutriments.salt}</Text>
            <Text>Saturated Fat: {nutriments.saturatedFat}</Text>
            <Text>Sugars: {nutriments.sugars}</Text>
          </VStack>
        </Box>

        {/* Images Section */}
        <Box mt="5" bg="white" borderRadius="10" shadow="2" p="4">
          <Text fontSize="lg" fontWeight="bold" color="#333" mb="4">
            Additional Images
          </Text>
          <HStack space={3}>
            <Image
              source={{ uri: images.nutritionLabelImage }}
              style={{ height: 100, width: 100, borderRadius: 10 }}
              resizeMode="contain"
            />
            <Image
              source={{ uri: images.ingredientsLabelImage }}
              style={{ height: 100, width: 100, borderRadius: 10 }}
              resizeMode="contain"
            />
            <Image
              source={{ uri: images.packagingImage }}
              style={{ height: 100, width: 100, borderRadius: 10 }}
              resizeMode="contain"
            />
          </HStack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default ProductDetailScreen;
