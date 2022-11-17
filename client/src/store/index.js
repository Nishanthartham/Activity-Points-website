import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Store } from "redux";
// const user = JSON.parse(localStorage.getItem("user"));
// if (!user) user = false;
const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, isSignup: true },
  reducers: {
    signin(state) {
      state.isSignup = false;
    },
    signup(state) {
      state.isSignup = true;
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export const store = configureStore({ reducer: authSlice.reducer });
