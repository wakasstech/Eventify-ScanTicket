// import React, { useEffect } from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import SplashScreen from '../Screen/SplashScreen';
// import SelectLanguage from '../Screen/SelectLangauge';
// import TabNavigation from './TabNavigation';
// import {ImageProvider} from './ImageContext';
// import ProductScreen from '../Screen/ProductScreen';
// import BrandScreen from '../Screen/BrandScreen';
// import AddPaymentBtnScreen from '../Screen/AddPaymentBtnScreen';
// import ProductDetailScreen from '../Screen/ProductDetailScreen';
// import ListScreen from '../Screen/ListScreen';
// import PaymentScreen from '../Screen/PaymentScreen';
// import WelcomeScreen from '../Screen/WelcomeScreen';
// import ScannerScreen from '../Screen/ScannerScreen';
// import CameraScreen from '../Screen/CameraScreen';
// import ScanLoading from '../Screen/ScanLoading';
// import HomeScreen from '../Screen/HomeScreen';
// import FeedBackScreen from '../Screen/FeedBackScreen';
// import CompanyDetail from '../Screen/CompanyDetail';
// import AboutDetails from '../Screen/AboutDetails';
// import News from '../Screen/AllLists';
// import AllLists from '../Screen/AllLists';
// import CategoryDetailScreen from '../Screen/CategoryDetailScreen';
// import BrandDetailScreen from '../Screen/BrandDetailScreen';
// import { LogBox } from 'react-native';

// const Stack = createStackNavigator();

// export default function StackNavigation() {
//   useEffect(() => {
//     const ignoreWarnings = ["VirtualizedLists should never be nested", "Each child in a list should have a unique key prop"];

//     const filterWarnings = (warning) => {
//       return ignoreWarnings.some(keyword => warning.includes(keyword));
//     };

//     const originalConsoleWarn = console.warn; // Backup original warn function

//     console.warn = (warning) => {
//       if (!filterWarnings(warning)) {
//         originalConsoleWarn(warning); // Only log if it doesn't match our ignore conditions
//       }
//     };

//     // Ignore specific log messages
//     LogBox.ignoreLogs(ignoreWarnings);

//     return () => {
//       console.warn = originalConsoleWarn; // Restore original console.warn when component unmounts
//     };
//   }, []);


// // if (__DEV__) {
// //   require("../../ReactotronConfig");
// // }

//   return (
//     <NavigationContainer>
//       <ImageProvider>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           {/* <Stack.Screen name="Splash" component={SplashScreen} />
//           <Stack.Screen name="Language" component={SelectLanguage} />
//           <Stack.Screen name="HomeScreen" component={TabNavigation} />
//           <Stack.Screen name="ProductScreen" component={ProductScreen} />
//           <Stack.Screen name="BrandScreen" component={BrandScreen} />
//           <Stack.Screen name="ListScreen" component={ListScreen} />
//           <Stack.Screen name="AddPaymentBtnScreen" component={AddPaymentBtnScreen} />
//           <Stack.Screen name="ProductDetailsScreen" component={DetailScreen} />
//           <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
//           <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
//           <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
//           <Stack.Screen name="CameraScreen" component={CameraScreen} />
//           <Stack.Screen name="ScanLoading" component={ScanLoading} />
//           <Stack.Screen name="FeedBackScreen" component={FeedBackScreen} />
//           <Stack.Screen name="CompanyDetail" component={CompanyDetail} />
//           <Stack.Screen name="AboutDetails" component={AboutDetails} /> */}
//            <Stack.Screen name="HomeScreen" component={HomeScreen} />
//            <Stack.Screen name="AllLists" component={AllLists} />
//            <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
//            <Stack.Screen name="BrandDetail" component={BrandDetailScreen} />
//            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />


//         </Stack.Navigator>
//       </ImageProvider>
//     </NavigationContainer>
//   );
// }


import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox, StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground, Alert } from 'react-native';
import CameraScreen from '../Screen/CameraScreen';
// Screens
import SplashScreen from '../Screen/SplashScreen';
import AllLists from '../Screen/AllLists';
import CategoryDetailScreen from '../Screen/CategoryDetailScreen';
import BrandDetailScreen from '../Screen/BrandDetailScreen';
import ProductDetailScreen from '../Screen/ProductDetailScreen';
import HomeScreen from '../Screen/HomeScreen';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountryFromStorage } from '../globalStore/slices/countrySlice';
import { loadLanguage } from '../globalStore/slices/languageSlice';
import LanguageSwitcher from './LanguageSwitcher';
import DonatScreen from '../Screen/DonatScreen';
import AddPaymentBtnScreen from '../Screen/AddPaymentBtnScreen';

import BarCodeProductDetail from '../Screen/BarCodeProductDetail';
import PaymentScreen from '../Screen/PaymentScreen';
import AboutDetails from '../Screen/AboutDetails';
import AboutScreen from '../Screen/AboutScreen';
// import SelectLanguage from '../Screen/SelectLangauge';
import ScannerScreen from '../Screen/ScannerScreen';
import ScanLoading from '../Screen/ScanLoading';
import UserReviews from '../Screen/UserReviews';
import FinalSeatMapWithDynamicSections from '../Screen/SeatMap';
import StripePayment from '../Screen/StripePayment';
import SignUp from '../Screen/SignUp';
import SignIn from '../Screen/SignIn';
import { logout } from '../globalStore/slices/authSlice';

// Navigation Components
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const translations = {
  en: { welcome: 'Welcome To BuyRight!',
    home_screen: "Home",
    list_screen: "The Lists",
    news_screen: "News",
    donate_screen: "Donate"
   },
  ur: { welcome: 'خوش آمدید BuyRight',
    home_screen: "ہوم",
    list_screen: "فہرستیں",
    news_screen: "خبریں",
    donate_screen: "عطیہ"
   },
  fr: { welcome: 'Bienvenue chez BuyRight',
    home_screen: "Accueil",
    list_screen: "Listes",
    news_screen: "Actualités",
    donate_screen: "Faire un don"
   },
  de: { welcome: 'Willkommen bei BuyRight',
    home_screen: "Startseite",
  list_screen: "Listen",
  news_screen: "Nachrichten",
  donate_screen: "Spenden"
   },
  sv: { welcome: 'Välkommen till BuyRight',
    home_screen: "Hem",
    list_screen: "Listor",
    news_screen: "Nyheter",
    donate_screen: "Donera"
   },
  tr: { welcome: "BuyRight'a Hoş Geldiniz",
    home_screen: "Ana Sayfa",
    list_screen: "Listeler",
    news_screen: "Haberler",
    donate_screen: "Bağış"
   },
};
export default function StackNavigation() {
  const dispatch = useDispatch();
  const selectedBgColor = useSelector((state) => state.country.bgColor);
  const currentLanguage = useSelector((state) => state.language); // Get the selected language from Redux
  // const userRole =  AsyncStorage.getItem('userRole');
  // const isAuthenticate =  AsyncStorage.getItem('isAuthenticate');
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  // const [userRole, setUserRole] = useState(null);
  // console.log(userRole, 'userroleee')

  // const [isAuthenticate, setIsAuthenticate] = useState(false);
  // const [username, setUsername] = useState("");
  const { username, userRole, isAuthenticated } = useSelector((state) => state.auth);

  console.log(isAuthenticated, 'userroleee')
  const checkFirstLaunch = async () => {
    const alreadyLaunched = await AsyncStorage.getItem('alreadyLaunched');
    if (alreadyLaunched === null) {
      setIsFirstLaunch(true); // First launch, show SplashScreen
    } else {
      setIsFirstLaunch(false); // Not first launch, skip SplashScreen
    }
  };
 
  // Check if it's the first launch on initial render
  useEffect(() => {
    checkFirstLaunch();

    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested',
      'Each child in a list should have a unique key prop',
      'Possible unhandled promise rejection'
    ]);
    //  AsyncStorage.removeItem('selectedCountry');
    //  AsyncStorage.removeItem('selectedCountryFlag');
    //  AsyncStorage.removeItem('bgColor');
  }, []);

  // useEffect(() => {
  //   const fetchAuthData = async () => {
  //     try {
  //       const role = await AsyncStorage.getItem("userRole");
  //       const authStatus = await AsyncStorage.getItem("isAuthenticate");
  //       const storedUsername = await AsyncStorage.getItem("username");
        
  //       setUserRole(role);
  //       setIsAuthenticate(authStatus); // Ensure boolean value
  //       setUsername(storedUsername || "User");
  //     } catch (error) {
  //       console.error("Error fetching auth data:", error);
  //     }
  //   };

  //   fetchAuthData();
  // }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    Alert.alert(
      "Confirmar cerrar sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Cerrar sesión",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem("userRole");
              await AsyncStorage.removeItem("username");
              await AsyncStorage.removeItem("isAuthenticate");

              dispatch(logout()); // Reset Redux state
              // navigation.reset({
              //   index: 0,
              //   routes: [{ name: "login" }], // Navigate to login screen
              // });
            } catch (error) {
              console.error("Logout error:", error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };
  // useEffect(() => {
  //   dispatch(loadLanguage());  // Load language on app start
  //   dispatch(loadCountryFromStorage());
  // }, [dispatch]);

  const CustomHeader = ({ navigation }) => (
<View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between',alignItems: 'center', paddingHorizontal: 14,
      backgroundColor: '#2A2A35',  paddingVertical: 10}}>     
      
      <View style={{...styles.drawerHeaderContainer, }}>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require('../assets/menu-icon.png')} // Ensure this path is correct
          style={{ width: 18, height: 15 }} // Updated the size
        />
      </TouchableOpacity>

      {/* Welcome text */}
      {/* <Text style={styles.welcomeText}>Welcome To BuyRight!</Text> */}
      <Text style={styles.welcomeText}>
      Bienvenido a nuestra aplicación

      </Text>
      {/* Language Dropdown */}
      {/* <View style={{display: 'flex', flexDirection: 'row', gap:1, alignItems: 'center', borderWidth:1, borderColor: 'white', borderRadius:6, paddingVertical:1, paddingHorizontal:5}}>
      <Image
          source={require('../assets/language-but.webp')} // Ensure this path is correct
          style={{ width: 15, height: 15, tintColor: 'white' }} // Updated the size
        />
       <Text style={{fontSize: 12, color: 'white'}}>EN </Text> 
       <Text style={{fontSize: 8, color: 'white', fontWeight:'bold'}}>V</Text> 

      </View> */}
      {/* <LanguageSwitcher /> */}
    </View>
     {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2A2A35', gap:6 }}>
     <TouchableOpacity style={{ borderColor: 'white', borderWidth: 1, backgroundColor: 'transparent', padding:1.5, borderRadius: 5 }}
      onPress={() => navigation.navigate('login')}>
       <Text style={{ color: 'white', fontSize: 12, fontWeight: 600 }}>Sign In</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{ borderColor: 'white', borderWidth: 1, backgroundColor: 'transparent', padding:1.5, borderRadius: 5 }}
      onPress={() => navigation.navigate('register')}>
       <Text style={{ color: 'white', fontSize: 12, fontWeight: 600 }}>Sign Up</Text>
     </TouchableOpacity>
   </View> */}
    {isAuthenticated  && userRole ? (
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2A2A35', gap:6 }}>

            <Text style={{ color: "white", fontSize: 12, fontWeight: "600", color: 'yellow', textTransform:'capitalize' }}>
            {username?.slice(0, 7)}

            </Text>
            <TouchableOpacity
              style={{
                 borderBottomColor: "white",
                 borderBottomWidth: 1,
                backgroundColor: "transparent",
                // padding: 1.5,
                borderRadius: 5,
              }}
              onPress={(e)=> handleLogout(e)}
            >
              <Text style={{ color: "white", fontSize: 11, fontWeight: "600" }}>
              Cerrar sesión

              </Text>
            </TouchableOpacity>
          </View>
        ) : (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2A2A35', gap:6 }}>
     <TouchableOpacity style={{ borderColor: 'white', borderWidth: 1, backgroundColor: 'transparent', padding:1.5, borderRadius: 5 }}
      onPress={() => navigation.navigate('login')}>
       <Text style={{ color: 'white', fontSize: 10, fontWeight: 600 }}>Iniciar ses
       </Text>
     </TouchableOpacity>
     <TouchableOpacity style={{ borderColor: 'white', borderWidth: 1, backgroundColor: 'transparent', padding:1.5, borderRadius: 5 }}
      onPress={() => navigation.navigate('register')}>
       <Text style={{ color: 'white', fontSize: 10, fontWeight: 600 }}>Registrar
       </Text>
     </TouchableOpacity>
   </View> 
        )}
   </View>
  );
  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props} style={{ flex: 1, }}>
      {/* Background Image */}
      {/* <ImageBackground
        source={require('../assets/splashScreenOne.png')} // Add your image path here
        style={{ width: '100%',height: '60%',resizeMode: 'contain'  }} // Adjust style accordingly
      > */}
        {/* Close Button */}
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{ alignSelf: 'flex-end',paddingTop:5, paddingHorizontal: 10  }}>
         <Text style={{fontSize: 20, color: selectedBgColor || '#3C3B6E'}}>✖</Text> 
        </TouchableOpacity>

        {/* Welcome Text */}
        <View style={{ padding: 15,alignItems: 'center'  }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: selectedBgColor || '#3C3B6E' }}>Bienvenido a
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: selectedBgColor || '#3C3B6E' }}>Reserva de entradas

          </Text>
        </View>
      {/* </ImageBackground> */}

      {/* Drawer Items */}
      <DrawerItemList {...props} />

      </DrawerContentScrollView>
    );
  };
  const HomeDrawerNavigator = () => (
    <Drawer.Navigator
     drawerContent={(props) => <CustomDrawerContent {...props} />} 
    screenOptions={({ navigation }) => ({
      header: () => <CustomHeader navigation={navigation} />, 
      drawerActiveTintColor: selectedBgColor || '#3C3B6E', // Color scheme from image
      drawerLabelStyle: { fontSize: 16, fontWeight: '600' },
      // drawerItemStyle: { marginVertical: -0.5 },
    })}
  >
    <Drawer.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:8 }}>
            <Image
              source={require('../assets/drawer_icons/home_icon.png')} // Correct path
              style={{ width: 17, height: 17, tintColor: selectedBgColor || '#3C3B6E' }}
            />
            <Text style={{ fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: "600",
  fontStyle: "normal",
  
  color:  "#0D2526" }}>Hogar</Text>
          </View>
        ),
        drawerLabel: () => null, // Hides the default label
      }}
    />
     {/* <Drawer.Screen 
      name="News" 
      component={() => (
        <View style={{
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: '#F5F5F5' // Light gray background
        }}>
          <Text style={{
            fontFamily: "Montserrat",
            fontSize: 18,
            fontWeight: "600",
            fontStyle: "normal",
            color: "#0D2526", // Dark greenish-blue
            textAlign: 'center'
          }}>
            En desarrollo, trabajando en ello
            👨‍💻 👨‍💻
          </Text>
          <Text style={{
            fontFamily: "Montserrat",
            fontSize: 15,
            fontWeight: "600",
            fontStyle: "normal",
            color: "#0D2526", // Dark greenish-blue
            textAlign: 'center'
          }}>
            Under Development, Working on it 👨‍💻 👨‍💻
          </Text>
        </View>
      )}
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:8 }}>
            <Image
              source={require('../assets/drawer_icons/news_icon.png')} // Correct path
              style={{ width: 17, height: 17, tintColor: selectedBgColor || '#3C3B6E' }}
            />
            <Text style={{ fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: "600",
  fontStyle: "normal",
  
  color:  "#0D2526" }}>Perfil de usuario
 <Text style={{fontSize:8}}>(Iniciar sesión/Registrarse
 )</Text></Text>
          </View>
        ),
        drawerLabel: () => null, // Hides the default label
      }}
    /> */}
    <Drawer.Screen 
      name="Brands" 
      component={() => (
        <View style={{
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: '#F5F5F5' // Light gray background
        }}>
          <Text style={{
            fontFamily: "Montserrat",
            fontSize: 18,
            fontWeight: "600",
            fontStyle: "normal",
            color: "#0D2526", // Dark greenish-blue
            textAlign: 'center'
          }}>
            En desarrollo, trabajando en ello
            👨‍💻 👨‍💻
          </Text>
          <Text style={{
            fontFamily: "Montserrat",
            fontSize: 15,
            fontWeight: "600",
            fontStyle: "normal",
            color: "#0D2526", // Dark greenish-blue
            textAlign: 'center'
          }}>
            Under Development, Working on it 👨‍💻 👨‍💻
          </Text>
        </View>
      )}
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:8 }}>
            <Image
              source={require('../assets/drawer_icons/brand_icon.png')} // Correct path
              style={{ width: 17, height: 17, tintColor: selectedBgColor || '#3C3B6E' }}
            />
            <Text style={{ fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: "600",
  fontStyle: "normal",
  
  color:  "#0D2526" }}>Billetera</Text>
          </View>
        ),
        drawerLabel: () => null, // Hides the default label
      }}
    />
    <Drawer.Screen 
      name="Categories" 
      component={AboutDetails} 
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:8 }}>
            <Image
              source={require('../assets/drawer_icons/categories_icon.png')} // Correct path
              style={{ width: 17, height: 17, tintColor: selectedBgColor || '#3C3B6E' }}
            />
            <Text style={{ fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: "600",
  fontStyle: "normal",
  
  color:  "#0D2526" }}>Precios</Text>
          </View>
        ),
        drawerLabel: () => null, // Hides the default label
      }}
    />
    {/* <Drawer.Screen
    name="Donate"
    component={HomeScreen}
    options={{
      drawerIcon: ({ color }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap:8 }}>
          <Image
            source={require('../assets/drawer_icons/donate_icon.png')} // Correct path
            style={{ width: 17, height: 17, tintColor: selectedBgColor || '#3C3B6E' }}
          />
          <Text style={{ fontFamily: "Montserrat",
fontSize: 14,
fontWeight: "600",
fontStyle: "normal",

color:  "#0D2526" }}>About Us</Text>
        </View>
      ),
      drawerLabel: () => null, // Hides the default label
    }}
  /> */}
   
    {/* <Drawer.Screen 
      name="History" 
      component={HomeScreen} 
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:8 }}>
            <Image
              source={require('../assets/drawer_icons/history_icon.png')} // Correct path
              style={{ width: 17, height: 17, tintColor: selectedBgColor || '#3C3B6E' }}
            />
            <Text style={{ fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: "600",
  fontStyle: "normal",
  
  color:  "#0D2526" }}>History</Text>
          </View>
        ),
        drawerLabel: () => null, // Hides the default label
      }}
    />
     <Drawer.Screen 
      name="Notification" 
      component={AboutDetails} 
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:8 }}>
            <Image
              source={require('../assets/drawer_icons/notification_icon.png')} // Correct path
              style={{ width: 17, height: 17, tintColor: selectedBgColor || '#3C3B6E' }}
            />
            <Text style={{ fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: "600",
  fontStyle: "normal",
  
  color:  "#0D2526" }}>Notification</Text>
          </View>
        ),
        drawerLabel: () => null, // Hides the default label
      }}
    /> */}

<Drawer.Screen 
      name="About Us" 
      component={DonatScreen} 
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:8, marginTop: 10 }}>
            <Image
              source={require('../assets/drawer_icons/aboutUs_icon.png')} // Correct path
              style={{ width: 17, height: 17 }}
            />
            <Text style={{ fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: "600",
  fontStyle: "normal",
  
  color:  "#0D2526" }}>Sobre nosotros</Text>
          </View>
        ),
        drawerLabel: () => null, // Hides the default label
      }}
    />
    {/* <Drawer.Screen 
      name="FAQs" 
      component={AboutDetails} 
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:8, }}>
            <Image
              source={require('../assets/drawer_icons/faq_icon.png')} // Correct path
              style={{ width: 17, height: 17 }}
            />
            <Text style={{ fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: "600",
  fontStyle: "normal",
  
  color:  "#0D2526" }}>FAQs</Text>
          </View>
        ),
        drawerLabel: () => null, // Hides the default label
      }}
    /> */}
    <Drawer.Screen 
      name="User Reviews" 
      component={UserReviews} 
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:8, }}>
            <Image
              source={require('../assets/drawer_icons/userReviews_icon.png')} // Correct path
              style={{ width: 17, height: 17 }}
            />
            <Text style={{ fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: "600",
  fontStyle: "normal",
  
  color:  "#0D2526" }}>Reseñas de usuarios
</Text>
          </View>
        ),
        drawerLabel: () => null, // Hides the default label
      }}
    />
      {/* <Drawer.Screen 
      name="Setting" 
      component={AboutDetails} 
      options={{
        drawerIcon: ({ color }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:8, }}>
            <Image
              source={require('../assets/drawer_icons/setting_icon.png')} // Correct path
              style={{ width: 17, height: 17 }}
            />
            <Text style={{ fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: "600",
  fontStyle: "normal",
  
  color:  "#0D2526" }}>Setting</Text>
          </View>
        ),
        drawerLabel: () => null, // Hides the default label
      }}
    /> */}
  
  </Drawer.Navigator>
  );

  // Bottom Tab Navigator for Home, Lists, and Categories
  // const TabNavigator = () => (
  //   <Tab.Navigator>
      // <Tab.Screen
      //   name="HomeDrawer"
      //   component={HomeDrawerNavigator}
      //   options={{ headerShown: false, title: 'Home' }}
  //     />
  //     <Tab.Screen
  //       name="AllLists"
  //       component={AllLists}
  //       options={{ headerShown: false }}
  //     />
  //     <Tab.Screen
  //       name="Categories"
  //       component={CategoryDetailScreen}
  //       options={{ headerShown: false }}
  //     />
  //   </Tab.Navigator>
  // );
  const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
    style={styles.scanButton}
    onPress={() => {
      console.log('Scan tab clicked');
      if (onPress) {
        onPress();
      }
    }}
  >
    <View style={{...styles.scanIconContainer,backgroundColor: selectedBgColor || '#2A2A35'}}>{children}</View>
  </TouchableOpacity>
  );

  const TabNavigator = () => (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: {
        backgroundColor: selectedBgColor || '#2A2A35', // Green background
        height: 50,
        paddingBottom: 2
      },
      tabBarLabelStyle: {
        fontSize: 12, // Adjust font size
        marginTop: -5, // Reduce the space between icon and label
        marginBottom: 5, // Space between label and bottom of tab bar
      },
      tabBarIconStyle: {
        marginBottom: -5, // Pushes the icon closer to the label
      },
      tabBarActiveTintColor: '#FFD700', // Active tab color (Gold) for both icon and title
      tabBarInactiveTintColor: '#fff', // Inactive tab color (White)
    })}
    >
       <Tab.Screen
        name="HomeDrawer"
        component={HomeDrawerNavigator}
        
        options={{
          headerShown: false, title: `Hogar`,
          tabBarIcon: ({ focused }) => 
            <Image
          source={require('../assets/home-icon-bottom.png')} // Ensure this path is correct
          style={{ width: 18, height: 15,  tintColor: focused ? '#FFD700' : '#fff', }} // Updated the size
        />,
        }}
      />
      <Tab.Screen
        name="AllLists"
        component={AllLists}
        options={{
          headerShown: false, title: `Eventos` ,
          tabBarIcon: ({ focused }) => 
            <Image
          source={require('../assets/list-icon-bottom.png')} // Ensure this path is correct
          style={{ width: 18, height: 15,  tintColor: focused ? '#FFD700' : '#fff', }} // Updated the size
        />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={HomeDrawerNavigator}
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <Image
                source={require('../assets/scan-qr.png')} // Replace with your scan image
                style={styles.scanButtonIcon}
              />
            </CustomTabBarButton>
          ),
          // tabBarIcon: () => <Text style={styles.iconText}>Scan</Text>, // Icon for scan button
        }}
      />
      <Tab.Screen
        name="News"
        component={AboutDetails     }
        options={{
          headerShown: false, title: `Precios`,
          tabBarIcon: ({ focused }) => 
            <Image
          source={require('../assets/drawer_icons/pricingg.png')} // Ensure this path is correct
          style={{ width: 18, height: 15 , tintColor: focused ? '#FFD700' : '#fff',}} // Updated the size
        />,
        }}
      />
      <Tab.Screen
        name="Donate"
        component={DonatScreen  }
        options={{
          headerShown: false, title: `Contacto`,
          tabBarIcon: ({focused}) => 
            <Image
          source={require('../assets/drawer_icons/cc.png')} // Ensure this path is correct
          style={{ width: 18, height: 15, tintColor: focused ? '#FFD700' : '#fff', }} // Updated the size
        />,
        }}
      />
    </Tab.Navigator>
  );

  if (isFirstLaunch === null) {
    return null; // Show a loading spinner if needed
  }

  return (
    <NavigationContainer>
       {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* <Stack.Screen name="LanguageScreen" component={SelectLanguage} />
        //  */}
        {/*  <Stack.Screen name="CameraScreen" component={CameraScreen} />
       <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
       <Stack.Screen name="ScanLoading" component={ScanLoading} />
       <Stack.Screen name="BarCodeProductDetail" component={BarCodeProductDetail} />

      </Stack.Navigator> */}
      
       <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
        <Stack.Screen name="ScanLoading" component={ScanLoading} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="register" component={SignUp} />
        <Stack.Screen name="login" component={SignIn} />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
        <Stack.Screen name="SeatMap" component={FinalSeatMapWithDynamicSections} />
        <Stack.Screen name="StripePayment" component={StripePayment} />

        <Stack.Screen name="BrandDetail" component={BrandDetailScreen} />
        <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
        <Stack.Screen name="PaymentMethods" component={AddPaymentBtnScreen} />
        <Stack.Screen name="ConfirmPayment" component={PaymentScreen} />
        
        <Stack.Screen name="NewsDetail" component={AboutScreen} />

      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerHeaderContainer: {
   
      flexDirection: 'row',
    gap:15,
      alignItems: 'center',
      
     
   
   
  },
  welcomeText: {
     textAlign: 'center',
    color: 'white',
fontSize: 12,
fontFamily: 'Montserrat',
fontWeight: '700',
wordWrap: 'break-word'
  },
  languageText: {
    color: '#fff',
    fontSize: 14,
  },

  iconText: {
    color: '#fff',
  },
  scanButton: {
    top: -30, // Pushes the button above the tab bar
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderColor: '#fff'
  },
  scanButtonIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#fff', // Green background for the scan icon
    // borderRadius: 0,
  },
});
