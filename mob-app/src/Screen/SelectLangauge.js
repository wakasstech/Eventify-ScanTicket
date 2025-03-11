// import React, {useState, useEffect, useRef} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Modal,
//   Animated,
// } from 'react-native';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import Flag from 'react-native-flags';
// import i18next, {languageResources} from '../../services/i18next'; // Adjust the path as needed
// import {useTranslation} from 'react-i18next';
// import languagesList from '../../services/languagesList.json'; // Import your languages list
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { changeLanguage } from '../globalStore/slices/languageSlice';
// export default function SelectLanguage({navigation}) {
//   const [visible, setVisible] = useState(false);
//   const {t} = useTranslation();
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const animatedValues = useRef(
//     Object.keys(languageResources).map(() => new Animated.Value(0)),
//   ).current;

//   // const selectLanguage = async lng => {
//   //   setSelectedLanguage(lng);
//   //   console.log(lng);
//   //   await AsyncStorage.setItem('selectedLanguage', lng);

//   //   i18next.changeLanguage(lng);
//   //   setVisible(false); // Hide the modal after selection
//   // };
//   const selectLanguage = async (lng) => {
//     // console.log("waqas")
//     setSelectedLanguage(lng);
//     dispatch(changeLanguage(lng)); // Update language in Redux
//     await AsyncStorage.setItem('selectedLanguage', lng);
//     i18next.changeLanguage(lng);
//     setVisible(false); // Hide the modal after selection
//   };

//   console.log(selectLanguage);

//   useEffect(() => {
//     Animated.stagger(
//       100,
//       animatedValues.map(anim =>
//         Animated.timing(anim, {
//           toValue: 1,
//           duration: 500,
//           useNativeDriver: true,
//         }),
//       ),
//     ).start();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           alignItems: 'center',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           marginBottom: hp('2%'),
//         }}>
//         <View>
//           <Text style={styles.header}>{t('Languages')}</Text>
//         </View>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('ScannerScreen')}
//           style={styles.doneButton}>
//           <Text style={styles.doneButtonText}>{t('Done')}</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Language Selection Modal */}
//       <Modal visible={visible} onRequestClose={() => setVisible(false)}>
//         <View style={styles.languagesList}>
//           <FlatList
//             data={Object.keys(languageResources)}
//             renderItem={({item, index}) => (
//               <TouchableOpacity
//                 style={[
//                   styles.languageCard,
//                   selectedLanguage === item && styles.selectedLanguageCard,
//                 ]}
//                 onPress={() => selectLanguage(item)}
//                 key={item}>
//                 <View style={styles.languageContent}>
//                   <Flag
//                     code={languagesList[item]?.countryCode || ''}
//                     size={32}
//                   />
//                   <Text style={styles.languageName}>
//                     {languagesList[item]?.nativeName || item}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             )}
//             keyExtractor={item => item}
//           />
//         </View>
//       </Modal>

//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View >
//           {Object.keys(languageResources).map((lng, index) => (
//             <Animated.View
//               key={lng}
//               style={{
//                 opacity: animatedValues[index],
//                 transform: [
//                   {
//                     scale: animatedValues[index].interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0.9, 1],
//                     }),
//                   },
//                 ],
//               }}>
//               <TouchableOpacity
//                 style={[
//                   styles.languageCard,
//                   selectedLanguage === lng && styles.selectedLanguageCard,
//                 ]}
//                 onPress={() => selectLanguage(lng)}>
//                 <View style={styles.languageContent}>
//                   <Flag
//                     code={languagesList[lng]?.countryCode || ''}
//                     size={64}
//                   />
                

//                   <Text style={styles.languageName}>
//                     {languagesList[lng]?.nativeName || lng}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </Animated.View>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 0,
//     color: 'black'
//   },
//   languagesContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   languageCard: {
//     // width: wp('90%'),

//     // height: 100,
//     backgroundColor: '#f5f5f5',
//     alignItems: 'center',
//      marginBottom: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#919190',
//     flexDirection: 'row',
//     elevation:4,
//   },
//   selectedLanguageCard: {
//     borderColor: '#ff0000',
//   },
//   languageContent: {
//     width: wp('50%'),
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap:15,
//     padding: 10,
//   },
//   languageName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   doneButton: {
//     alignSelf: 'center',
//     backgroundColor: '#4CAD73',
//     paddingVertical: 6,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   doneButtonText: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   openModalButton: {
//     marginTop: 20,
//     backgroundColor: '#6258e8',
//     padding: 10,
//     borderRadius: 3,
//   },
//   openModalButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   languagesList: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 10,
//     backgroundColor: '#6258e8',
//   },
//   languageButton: {
//     padding: 10,
//     borderBottomColor: '#dddddd',
//     borderBottomWidth: 1,
//   },
//   lngName: {
//     fontSize: 16,
//     color: 'white',
//   },
// });
import { View } from 'native-base'
import React from 'react'

const SelectLangauge = () => {
  return (
    <View>
      
    </View>
  )
}

export default SelectLangauge
