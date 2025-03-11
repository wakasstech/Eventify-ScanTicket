import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Animated, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'native-base';

const words = [
  'Lorem',
  'Ipsum',
  'has',
  'been',
  'the',
  "industry's",
  'standard',
  'dummy',
  'text',
];

export default function SplashScreen({ navigation }) {
  const fadeAnims = useRef(words.map(() => new Animated.Value(0))).current; // Initial value for opacity of each word: 0
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const scaleAnim = useRef(new Animated.Value(0.5)).current; // Initial value for scale: 0.5

  useEffect(() => {
    // Parallel animation for both opacity and scale
    const rightBuyAnimations = Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]);

    // Sequence animation for each word
    const wordAnimations = words.map((_, index) =>
      Animated.timing(fadeAnims[index], {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: index * 50, // delay each word
      }),
    );

    // Start animations
    Animated.sequence([rightBuyAnimations, Animated.stagger(500, wordAnimations)]).start();
  }, [fadeAnims, fadeAnim, scaleAnim]);
  // Function to store 'alreadyLaunched' and navigate
  const handleNavigation = async () => {
    // Set the item in AsyncStorage
    await AsyncStorage.setItem('alreadyLaunched', 'true');
    // Navigate to the TabNavigator
     navigation.replace('TabNavigator'); // Prevent back navigation to SplashScreen
  };
  useEffect(() => {
    // Navigate to Home screen after a 3-second delay
    const timeout = setTimeout(() => {
      handleNavigation();
    }, 10000);

    // Clean up the timeout if component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2A2A35' }}>
      <View style={{ width: wp(100), height: hp(95), alignItems: 'center', justifyContent: 'center' }}>
        {/* <ImageBackground
          source={require('../assets/splashScreenOne.png')}
          style={{ width: wp(70), height: hp(45), alignItems: 'center', justifyContent: 'center' }}
        > */}
          {/* <View style={styles.centeredView}> */}
          <Image
            source={require('../assets/event/splash-image.png')}
          style={{ width: wp(50), height: hp(40), resizeMode: 'contain' }}
        />
          {/* </View> */}
        {/* </ImageBackground> */}
      </View>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={require('../assets/dotstwo.gif')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    borderRadius: hp(10),
    justifyContent: 'center',
    width: wp(40),
    height: hp(20),
    backgroundColor: '#4CAD73',
  },
  titleText: {
    fontSize: 33,
    fontWeight: '700',
    color: 'white',
  },
  imageContainer: {
    width: wp(90),
    height: hp(12),
    alignItems: 'center',
    top: hp(-4),
  },
  image: {
    width: 100,
    height: 100,
  },
});
