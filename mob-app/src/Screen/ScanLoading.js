// import React, {useEffect, useState} from 'react';
// import {Image, Text, View} from 'react-native';
// import FastImage from 'react-native-fast-image';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {URl} from '../component/Constant';

// export default function ScanLoading({navigation, route}) {
//   console.log('>>>', route.params.img);

//   const imageUri = route.params.img;

//   const postImg = async () => {
//     if (!imageUri) {
//       console.log('No image URI available');
//       return;
//     }

//     const formData = new FormData();
//     console.log('Image URI:', imageUri);

//     formData.append('logo_image', {
//       uri: imageUri,
//       type: 'image/jpeg', // Adjust the MIME type if necessary
//       name: 'upload.jpg', // Adjust the filename if necessary
//     });

//     try {
//       const response = await fetch(`${URl}/logos/detectlogo`, {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Raw Response:', response);

//       const result = await response.json();
//       console.log('Response JSON:', result);

//       if (result) {
      
//       } else {
//         console.log('No result received from API');
//       }

//       return result;
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   useEffect(() => {
//     postImg();
    
//   }, []);

//   navigation.navigate('HomeScreen');
//   return (
//     <View style={{flex: 1, backgroundColor: '#01B763'}}>
//       <View
//         style={{
//           height: hp(30),
//           // backgroundColor: 'red',
//           alignItems: 'center',
//           justifyContent: 'flex-end',
//         }}>
//         <View
//           style={{
//             width: wp(75),
//             alignItems: 'center',
//             flexDirection: 'column',
//           }}>
//           <Text style={{fontSize: 18, color: 'white'}}>
//             Please wait, the product search is in{' '}
//           </Text>
//           <Text style={{fontSize: 18, color: 'white'}}>progress...</Text>
//         </View>
//       </View>

//       <View
//         style={{
//           height: hp(70),

//           alignItems: 'center',
//           // justifyContent: '',
//         }}>
//         <FastImage
//           source={require('../assets/scangif.gif')}
//           style={{width: '80%', height: hp(40)}}
//         />
//       </View>
//     </View>
//   );
// }

import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import {
  Box,
  Text,
  Image,
  Button,
  Center,
} from 'native-base';

export default function ScanLoading({ navigation, route }) {
  const BARCODE = route.params.barcode;

  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://735c-2407-d000-1a-975c-bc0c-5a1a-c115-19b4.ngrok-free.app/api/barcode/${BARCODE}`);
      const data = await response.json();

      if (response.ok) {
        setProductData(data);
      } else {
        console.error('Failed to fetch product details:', data);
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleYes = () => {
    // console.log("yes")
     navigation.navigate('BarCodeProductDetail', { productData });
  };

  const handleNo = () => {
    navigation.navigate('CameraScreen');
  };

  return (
    <Box flex={1} bg="#01B763" safeArea>
      {loading ? (
        <Center flex={1}>
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text color="white" mt={4} fontSize="lg" textAlign={"center"}>
            Please wait, the product search is in progress...
          </Text>
        </Center>
      ) : (
        <Box flex={1} alignItems="center" justifyContent="center" px={4}>
           {productData?.images?.productImage && (
        // <Image source={{ uri: images.productImage }} style={styles.productImage} />
      
          <Image
            source={{ uri: productData?.images.productImage }}
            alt="Product Image"
            size="xl"
            resizeMode="contain"
            borderRadius={10}
            mb={4}
          />)}
          <Text fontSize="2xl" fontWeight="bold" color="white" mb={2}>
            {productData?.commonName}
          </Text>
          <Text fontSize="md" color="white" textAlign="center" mb={4}>
            This product is commonly used for various purposes. It is important to verify its origin and usage.
          </Text>
          <Box flexDirection="row" justifyContent="space-between" width="100%">
            <Button
              flex={1}
              bg="#019653"
              _pressed={{ bg: '#019653' }}
              onPress={handleYes}
              mr={2}
            >
              Yes
            </Button>
            <Button
              flex={1}
              bg="#E04444"
              _pressed={{ bg: '#E04444' }}
              onPress={handleNo}
            >
              No
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
