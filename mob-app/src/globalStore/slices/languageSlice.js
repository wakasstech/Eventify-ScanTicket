// redux/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';

const LANGUAGE_KEY = 'appLanguage';

const languageSlice = createSlice({
  name: 'language',
  initialState: 'en',  // Default language
  reducers: {
    setLanguage: (state, action) => action.payload,  // Action to change language
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

// Async action to save language to AsyncStorage and dispatch change to Redux
export const changeLanguage = (language) => async (dispatch) => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);  // Save language in AsyncStorage
    i18next.changeLanguage(language);  // Update i18next language
    dispatch(setLanguage(language));  // Update Redux state
  } catch (e) {
    console.error('Failed to save language', e);
  }
};

// Function to load the language from AsyncStorage on app reload
export const loadLanguage = () => async (dispatch) => {
  try {
    const language = await AsyncStorage.getItem(LANGUAGE_KEY);
    const appLanguage = language || 'en';  // Set stored language, fallback to 'en'
    i18next.changeLanguage(appLanguage);  // Update i18next language on reload
    dispatch(setLanguage(appLanguage));  // Set Redux language state
  } catch (e) {
    console.error('Failed to load language', e);
  }
};
