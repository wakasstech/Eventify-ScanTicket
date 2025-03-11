// // import React, { useState } from 'react';
// // import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { changeLanguage } from '../globalStore/slices/languageSlice';
// // import i18next from 'i18next';

// // const LanguageSwitcher = () => {
// //   const dispatch = useDispatch();
// //   const currentLanguage = useSelector((state) => state.language);  // Get the selected language from Redux

// //   const [isModalVisible, setModalVisible] = useState(false);  // Manage modal visibility
// //   const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);  // Manage selected language state

// //   // Handle language change
// //   const handleChangeLanguage = (language) => {
// //     i18next.changeLanguage(language);  // Change language in i18next
// //     dispatch(changeLanguage(language));  // Dispatch language change to Redux
// //     setSelectedLanguage(language);  // Update selected language state
// //     setModalVisible(false);  // Close modal after language is selected
// //   };

// //   // Toggle modal visibility
// //   const toggleModal = () => {
// //     setModalVisible(!isModalVisible);
// //   };

// //   return (
// //     <View >
// //       {/* Button to show selected language and open modal */}
// //       {/* <TouchableOpacity onPress={toggleModal} style={styles.languageButton}>
// //         <Text style={styles.languageButtonText}>
// //           {selectedLanguage === 'en' ? 'English' : 'اردو'}  
// //         </Text>
// //       </TouchableOpacity> */}

// //       <TouchableOpacity  onPress={toggleModal} style={{display: 'flex', flexDirection: 'row', gap:1, alignItems: 'center', borderWidth:1, borderColor: 'white', borderRadius:6, paddingVertical:1, paddingHorizontal:5}}>
// //       <Image
// //           source={require('../assets/language-but.webp')} // Ensure this path is correct
// //           style={{ width: 15, height: 15, tintColor: 'white' }} // Updated the size
// //         />
// //        {/* <Text style={{fontSize: 12, color: 'white'}}>EN </Text> 
// //        <Text style={{fontSize: 8, color: 'white', fontWeight:'bold'}}>V</Text>  */}
// //       <Text style={styles.languageButtonText}>
// //   {selectedLanguage === 'en' ? 'English'.substring(0, 3) : 'اردو'.substring(0, 4)} v  {/* Show first three characters of the selected language */}
// // </Text>

// //       </TouchableOpacity>

// //       {/* Modal for language selection */}
// //       <Modal
// //         visible={isModalVisible}
// //         transparent={true}
// //         animationType="slide"
// //         onRequestClose={toggleModal}  // Close modal when the user taps outside or back button
// //       >
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
// //             <Text style={styles.modalTitle}>Select Language</Text>

// //             {/* Language Options */}
// //             <TouchableOpacity
// //               style={styles.languageOption}
// //               onPress={() => handleChangeLanguage('en')}
// //             >
// //               <Text style={styles.languageOptionText}>English</Text>  
// //             </TouchableOpacity>

// //             <TouchableOpacity
// //               style={styles.languageOption}
// //               onPress={() => handleChangeLanguage('ur')}
// //             >
// //               <Text style={styles.languageOptionText}>اردو</Text>  
// //             </TouchableOpacity>

// //             {/* Close modal button */}
// //             <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
// //               <Text style={styles.closeButtonText}>Close</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // // Styling for the component
// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //   },
// //   languageButton: {
// //     backgroundColor: '#008CBA',  // Change to a more visually appealing color
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   languageButtonText: {
// //     color: '#fff',  // White text for contrast
// //     fontSize: 12,
// //     fontWeight: 'bold',
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Darken the background to focus on the modal
// //   },
// //   modalContent: {
// //     backgroundColor: 'white',
// //     padding: 30,
// //     borderRadius: 10,
// //     width: '80%',
// //     alignItems: 'center',
// //   },
// //   modalTitle: {
// //     fontSize: 20,
// //     marginBottom: 20,
// //     fontWeight: 'bold',
// //   },
// //   languageOption: {
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 8,
// //     backgroundColor: '#f0f0f0',  // Light gray background for each option
// //     width: '100%',
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   languageOptionText: {
// //     fontSize: 16,
// //   },
// //   closeButton: {
// //     marginTop: 20,
// //     paddingVertical: 10,
// //     paddingHorizontal: 30,
// //     borderRadius: 8,
// //     backgroundColor: '#FF3B30',  // Red for close button
// //   },
// //   closeButtonText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //   },
// // });

// // export default LanguageSwitcher;
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   Modal,
//   Animated,
//   Image,
//   Dimensions,
// } from 'react-native';

// import Flag from 'react-native-flags';
// import i18next, { languageResources } from '../../services/i18next'; // Adjust the path as needed
// import languagesList from '../../services/languagesList.json'; // Import your languages list
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useSelector, useDispatch } from 'react-redux'; // Importing Redux hooks
// import { changeLanguage } from '../globalStore/slices/languageSlice';

// export default function SelectLanguage() {
//   const currentLanguage = useSelector((state) => state.language); // Get the selected language from Redux
//   const dispatch = useDispatch(); // Redux dispatch to update the language
  
//   const [visible, setVisible] = useState(false); // State to toggle modal visibility
//   const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage); // Manage selected language state
//   const animatedValues = useRef(
//     Object.keys(languageResources).map(() => new Animated.Value(0)),
//   ).current;

//   const selectLanguage = async (lng) => {
//     setSelectedLanguage(lng);
//     dispatch(changeLanguage(lng)); // Update language in Redux
//     await AsyncStorage.setItem('selectedLanguage', lng);
//     i18next.changeLanguage(lng);
//     setVisible(false); // Hide the modal after selection
//   };

//   useEffect(() => {
//     Animated.stagger(
//       100,
//       animatedValues.map((anim) =>
//         Animated.timing(anim, {
//           toValue: 1,
//           duration: 500,
//           useNativeDriver: true,
//         }),
//       ),
//     ).start();
//   }, []);

//   const toggleModal = () => {
//     setVisible(!visible);
//   };

//   // Extract language name with truncation for the button
//   const getLanguageLabel = (langCode) => {
//     const language = languagesList[langCode]?.nativeName || langCode;
//     return language.length > 3 ? language.substring(0, 4) : language;
//   };

//   return (
//     <View>
//       {/* Button to toggle modal */}
//       <TouchableOpacity onPress={toggleModal} style={styles.languageButton}>
//         <Image
//           source={require('../assets/language-but.webp')} // Ensure this path is correct
//           style={{ width: 15, height: 15, tintColor: 'white' }} // Updated the size
//         />
//         <Text style={styles.languageButtonText}>
//           {getLanguageLabel(selectedLanguage)} v {/* Show first few characters of the selected language */}
//         </Text>
//       </TouchableOpacity>

//       {/* Language Selection Modal */}
//       <Modal
//         visible={visible}
//         onRequestClose={() => setVisible(false)}
//         transparent={true}
//         animationType="slide"
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             {/* Close button */}
//             <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>✕</Text>
//             </TouchableOpacity>
            
//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//               <FlatList
//                 data={Object.keys(languageResources)}
//                 renderItem={({ item, index }) => (
//                   <TouchableOpacity
//                     style={[
//                       styles.languageCard,
//                       selectedLanguage === item && styles.selectedLanguageCard,
//                     ]}
//                     onPress={() => selectLanguage(item)}
//                     key={item}
//                   >
//                     <View style={styles.languageContent}>
//                       <Flag
//                         code={languagesList[item]?.countryCode || ''}
//                         size={32}
//                       />
//                       <Text style={styles.languageName}>
//                         {languagesList[item]?.nativeName || item}
//                       </Text>
//                     </View>
//                   </TouchableOpacity>
//                 )}
//                 keyExtractor={(item) => item}
//               />
//             </ScrollView>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   languageButton: {
//     display: 'flex',
//     flexDirection: 'row',
//     gap: 1,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 6,
//     paddingVertical: 1,
//     paddingHorizontal: 5,
//   },
//   languageButtonText: {
//     fontSize: 12,
//     color: 'white',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
//   },
//   modalContent: {
//     width: Dimensions.get('window').width * 0.9, // 80% of screen width
//     maxHeight: Dimensions.get('window').height * 0.7, // 60% of screen height
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//   },
//   closeButton: {
//     alignSelf: 'flex-end',
//     padding: 5,
//   },
//   closeButtonText: {
//     fontSize: 22,
//     color: 'black',
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//   },
//   languageCard: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     marginVertical: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   selectedLanguageCard: {
//     backgroundColor: '#f0f0f0',
//     borderColor: '#000',
//   },
//   languageContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   languageName: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#474444'
//   },
// });
import React from 'react'

const LanguageSwitcher = () => {
  return (
    <View>
      
    </View>
  )
}

export default LanguageSwitcher
