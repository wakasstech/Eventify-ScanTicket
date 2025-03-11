// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './slices/countrySlice';
import languageReducer from './slices/languageSlice';
import authReducer from "./slices/authSlice";  // Import the new auth slice

const store = configureStore({
  reducer: {
    language: languageReducer,
    country: countryReducer,
    auth: authReducer,  // Add auth reducer

  },
});

export default store;
