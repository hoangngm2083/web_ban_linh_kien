// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // sử dụng localStorage

import userReducer from "../slices/userSlice";

// Cấu hình redux-persist
const persistConfig = {
  key: "root", // key để lưu trữ
  storage, // sử dụng localStorage
};

// Kết hợp reducers
const rootReducer = combineReducers({
  user: userReducer,
  // post: postReducer
});

// Tạo persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo store với middleware tùy chỉnh
const store = configureStore({
  reducer: persistedReducer, // Kết nối persistedReducer vào Redux store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Bỏ qua kiểm tra các action của redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Export store và persistor
export const persistor = persistStore(store);
export default store;
