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
};

// Tạo slice cho user
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductTypes: (state, action) => {
      if (state.productTypes != null) return;
      state.productTypes = action.payload;
    },
  },
});

// Xuất ra các action và reducer
export const { setProductTypes } = productSlice.actions;
export const getProductTypes = (state) => state.product.productTypes;

export default productSlice.reducer;
