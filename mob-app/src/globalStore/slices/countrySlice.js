// store/countrySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Async thunk to load saved data from AsyncStorage
export const loadCountryFromStorage = createAsyncThunk('country/loadFromStorage', async () => {
  const savedCountry = await AsyncStorage.getItem('selectedCountry');
  const savedCountryFlag = await AsyncStorage.getItem('selectedCountryFlag');
  const savedBgColor = await AsyncStorage.getItem('bgColor');
  return {
    country: savedCountry ? JSON.parse(savedCountry) : null,
    selectedCountryFlag: savedCountryFlag || null,
    bgColor: savedBgColor || null,
  };
});

// Slice
const countrySlice = createSlice({
  name: 'country',
  initialState: {
    selectedCountry: null,
    selectedCountryFlag: null,
    bgColor: null,
    status: 'idle', // For async status
  },
  reducers: {
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload.country;
      state.selectedCountryFlag = action.payload.selectedCountryFlag;
      state.bgColor = action.payload.bgColor;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCountryFromStorage.fulfilled, (state, action) => {
      state.selectedCountry = action.payload.country;
      state.selectedCountryFlag = action.payload.selectedCountryFlag;
      state.bgColor = action.payload.bgColor;
    });
  },
});

export const { selectCountry } = countrySlice.actions;
export default countrySlice.reducer;
