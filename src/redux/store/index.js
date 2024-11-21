// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer, // Kết nối userSlice vào Redux store
  },
});

export default store;
