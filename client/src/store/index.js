import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Store } from "redux";
// const user = JSON.parse(localStorage.getItem("user"));
// if (!user) user = false;
var user = JSON.parse(localStorage.getItem("userId"));
if (!user) user = false;
else user = true;
const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: user, isSignup: true },
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
