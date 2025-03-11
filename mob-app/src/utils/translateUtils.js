import translate from 'translate-google-api';

export const translateText = async (text, targetLang = 'en') => {
  try {
    if (!text) return '';  // Handle empty text case
    const result = await translate(text, { to: targetLang });
    return result;  // Return translated text
  } catch (error) {
    console.error('Error translating text:', error);
    return text;  // In case of an error, return the original text
  }
};
// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { useTranslation } from 'react-i18next';  // Import hook for static translations
// import LanguageSwitcher from '../component/LanguageSwitcher';
// import axios from 'axios';
// import { translateText } from '../utils/translateUtils';  // Custom translation function

// const HomeScreen = () => {
//   const { t, i18n } = useTranslation();  // Use translation hook for static text
//   const [categories, setCategories] = useState([]);  // State to store categories
//   const [translatedCategories, setTranslatedCategories] = useState([]);  // State to store translated categories

//   // Fetch categories from API
//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(' https://boy.ranaafaqali.com/api/categories/CategoryAll');
//       setCategories(response.data);  // Set categories from API response
//       await translateCategories(response.data);  // Translate category names
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   // Function to translate category names dynamically
//   const translateCategories = async (categories) => {
//     try {
//       const translatedData = await Promise.all(
//         categories.map(async (category) => {
//           const translatedName = await translateText(category.name, i18n.language);  // Translate based on current language
//           return { ...category, translatedName };  // Return original category with translated name
//         })
//       );
//       setTranslatedCategories(translatedData);  // Set translated categories
//     } catch (error) {
//       console.error('Error translating category names:', error);
//     }
//   };

//   // Fetch and translate categories on component mount or when the language changes
//   useEffect(() => {
//     fetchCategories();
//   }, [i18n.language]);  // Re-run effect when language changes

//   return (
//     <View>
//       <LanguageSwitcher/>
//       <Text>{t('welcome_message')}</Text>  {/* Static translation for welcome message */}
//       <Text>{t('see_all')}</Text>  {/* Static translation for 'See All' */}

//       {/* Render translated categories */}
//       {translatedCategories.map((category, index) => (
//         <View key={index}>
//           <Text style={{textAlign: 'center'}}>
//             {category.translatedName}  {/* Show translated category name */}
//           </Text>  
//         </View>
//       ))}
//     </View>
//   );
// };

// export default HomeScreen;
