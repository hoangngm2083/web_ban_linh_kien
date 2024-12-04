import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  createTransform,
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

import cartReducer from "../slices/cartSlice";
import userReducer from "../slices/userSlice";

// Tạo transform để loại trừ `selectedItems` khỏi `cart` reducer
const excludeSelectedItems = createTransform(
  // Chuyển đổi state trước khi lưu vào persist storage
  (inboundState, key) => {
    if (key === "cart") {
      const { selectedItems, ...rest } = inboundState; // Loại bỏ `selectedItems`
      return rest;
    }
    return inboundState;
  },
  // Chuyển đổi state sau khi load từ persist storage
  (outboundState, key) => outboundState,
  { whitelist: ["cart"] } // Chỉ áp dụng với `cart` reducer
);

// Cấu hình redux-persist
const persistConfig = {
  key: "root",
  storage,
  transforms: [excludeSelectedItems],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
