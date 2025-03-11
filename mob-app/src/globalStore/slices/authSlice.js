import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  username: null,
  userRole: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { username, role } = action.payload;
      state.username = username;
      state.userRole = role;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = null;
      state.userRole = null;
      state.isAuthenticated = false;
    },
    hydrateState: (state, action) => {
        const { username, userRole, isAuthenticated } = action.payload;
        state.username = username;
        state.userRole = userRole;
        state.isAuthenticated = isAuthenticated;
      },
  },
});

export const { loginSuccess, logout, hydrateState  } = authSlice.actions;
export default authSlice.reducer;
