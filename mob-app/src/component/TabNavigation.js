import React, {useState, useContext, useRef, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  ImageBackground,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import HomeScreen from '../Screen/HomeScreen';
import {ImageContext} from './ImageContext';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import ListScreen from '../Screen/ListScreen';
import AboutScreen from '../Screen/AboutScreen';
import HistoryScreen from '../Screen/HistoryScreen';
import DonatScreen from '../Screen/DonatScreen';
import News from '../Screen/AllLists';
import RBSheet from 'react-native-raw-bottom-sheet';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {setImage} = useContext(ImageContext);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity of 0
  const slideAnim = useRef(
    new Animated.Value(heightPercentageToDP('22%')),
  ).current; // Initial position off-screen

  // Reference for the bottom sheet
  const refRBSheet = useRef(null);

  useEffect(() => {
    if (modalVisible) {
      // Animate the modal to appear
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Animate the modal to disappear
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: heightPercentageToDP('22%'),
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [modalVisible]);

  const openImagePicker = () => {
    launchImageLibrary({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        setImage(source);
        setModalVisible(false);
        navigation.navigate('ProductDetailsScreen');
      }
    });
  };

  const openCameraPicker = async () => {
    try {
      // Check camera permission
      const cameraPermission = await check(PERMISSIONS.ANDROID.CAMERA);
      const storagePermission = await check(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      );

      if (
        cameraPermission === RESULTS.GRANTED &&
        storagePermission === RESULTS.GRANTED
      ) {
        // Launch camera if permissions are granted
        launchCamera({}, response => {
          console.log('Response from camera picker:', response); // Log response for debugging

          if (!response) {
            console.log('No response object received');
            return;
          }

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.assets && response.assets.length > 0) {
            // Process the image response here
            const source = {uri: response.assets[0].uri};
            setImage(source);
            setModalVisible(false);
            // Further processing like setting state, navigation, etc.
            console.log('Selected image URI:', source.uri);
            navigation.navigate('DetailScreen');
          } else {
            console.log('No image selected or assets array is empty');
            // Optionally handle this case, e.g., show a message to the user
          }
        });
      } else {
        // Request permissions if not granted
        const resultCamera = await request(PERMISSIONS.ANDROID.CAMERA);
        const resultStorage = await request(
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        );

        if (
          resultCamera === RESULTS.GRANTED &&
          resultStorage === RESULTS.GRANTED
        ) {
          openCameraPicker(); // Retry opening the camera after permissions are granted
        } else {
          console.log('Camera or storage permissions denied');
          // Optionally handle the case when permissions are denied
        }
      }
    } catch (error) {
      console.error('Error checking or requesting permissions:', error);
    }
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
            backgroundColor: '#4CAD73',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/img21.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#FFBB00' : 'white',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="News"
          component={News}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/img23.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#FFBB00' : 'white',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="DetailScreen"
          component={HomeScreen}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <TouchableOpacity
                onPress={() => refRBSheet.current.open()}
                style={{
                  backgroundColor: 'white',
                  width: widthPercentageToDP('18%'),
                  borderRadius: 100,
                  height: heightPercentageToDP('9%'),
                  top: heightPercentageToDP(-4),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: 'white',
                    width: widthPercentageToDP('16%'),
                    borderRadius: 100,
                    // height: heightPercentageToDP('7.8%'),
                    elevation: 4,
                  }}>
                  <ImageBackground
                    source={require('../assets/bottom4.png')}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: widthPercentageToDP(20),
                      height: heightPercentageToDP(10),
                      // tintColor: focused ? 'blue' : 'gray',
                    }}>
                    <Image
                      source={require('../assets/bottom3.png')}
                      style={{
                        width: widthPercentageToDP(10),
                        height: heightPercentageToDP(5),
                      }}
                    />
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/img24.png')}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#FFBB00' : 'white',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="CartTwo"
          component={DonatScreen}
          options={{
            title: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/img26.png')}
                style={{
                  width: 28,
                  height: 24,
                  tintColor: focused ? '#FFBB00' : 'white',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>

      <RBSheet
        ref={refRBSheet}
        height={heightPercentageToDP('22%')} // Adjust height as needed
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#f0f5f1',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingHorizontal: widthPercentageToDP('5%'),
            paddingVertical: heightPercentageToDP('2%'),
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View
          style={{
            width: widthPercentageToDP(100),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity onPress={openCameraPicker}>
            <Image
              source={require('../assets/img32.png')}
              style={{
                width: widthPercentageToDP('26%'),
                height: heightPercentageToDP('10%'),
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={openImagePicker}>
            <Image
              source={require('../assets/img33.png')}
              style={{
                width: widthPercentageToDP('26%'),
                height: heightPercentageToDP('10%'),
              }}
            />
          </TouchableOpacity>
        </View>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    height: heightPercentageToDP('100%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flexDirection: 'row',
    backgroundColor: '#f0f5f1',
    justifyContent: 'space-evenly',
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('22%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default TabNavigation;
