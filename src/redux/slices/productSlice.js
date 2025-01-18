// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo trạng thái ban đầu
const initialState = {
  // productTypes: [
  //   {
  //     name: "Raspberry pi",
  //     id: "raspberryPi",
  //   },
  //   {
  //     name: "Robot",
  //     id: "robot",
  //   },
  //   {
  //     name: "Arduino",
  //     id: "adruino",
  //   },
  // ],
  productTypes: null,
  productsWithPage: null, // {
  // page 1
  // 1: [
  //   product1
  // ],
  // 2: [
  // ]
  //  },
};

// Tạo slice cho user
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductsWithPage: (state, action) => {
      if (!state.productsWithPage) {
        state.productsWithPage = {};
      }

      state.productsWithPage[action.payload.page] = action.payload.products;
    },
    setProductTypes: (state, action) => {
      if (state.productTypes != null) return;
      state.productTypes = action.payload;
    },

    updateChildProductTypes: (state, action) => {
      state.productTypes = action.payload;
    },
  },
});

// Xuất ra các action và reducer
export const { setProductTypes, setProductsWithPage, updateChildProductTypes } =
  productSlice.actions;
export const getProductTypes = (state) => state.product.productTypes;
export const getProductsWithPage = (state) => {
  return state.productsWithPage;
};

export default productSlice.reducer;
