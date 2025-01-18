// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo trạng thái ban đầu
const initialState = {
  id: null, // userId ban đầu là null
  quantitySelected: 0,
  items: [],
};

// Tạo slice cho user
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    init: (state, action) => {
      state.id = action.payload?.productID;
      state.quantitySelected = Number(action.payload?.quantitySelected);
      state.items = action.payload?.items;
    },
    resetCart: (state, action) => {
      state.id = null;
      state.quantitySelected = 0;
      state.items = [];
    },
    removeItems: (state, action) => {
      const idsToRemove = action.payload.map((item) => {
        console.log(
          "before",
          state.quantitySelected,
          Number(item.quantitySelected)
        );

        state.quantitySelected -= Number(item.quantitySelected);
        console.log("after", state.quantitySelected);
        return item.productID;
      });
      state.items = state.items.filter(
        (item) => !idsToRemove.includes(item.productID)
      );
      state.items.forEach((ele, i) => {
        ele.index = i;
      });
    },
    addItem: (state, action) => {
      const item = state.items?.find(
        (item) => item.productID == action.payload?.productID
      );

      if (!!item) {
        item.quantitySelected += Number(action.payload?.quantitySelected);
        state.quantitySelected += Number(action.payload?.quantitySelected);
        return;
      }
      state.items.push({ ...action.payload, index: state.items.length });
      state.quantitySelected += Number(action.payload?.quantitySelected);
    },
    decrease: (state, action) => {
      const item = state.items[action.payload?.index];
      if (item && item.quantitySelected > 1) {
        item.quantitySelected -= 1;
        state.quantitySelected -= 1;
      }
    },

    increase: (state, action) => {
      const item = state.items[action.payload?.index];
      item.quantitySelected += 1;
      state.quantitySelected += 1;
    },

    removeItem: (state, action) => {
      state.quantitySelected -= Number(action.payload?.quantitySelected);
      state.items = [
        ...state.items.slice(0, action.payload?.index),
        ...state.items.slice(action.payload?.index + 1).map((item) => {
          const newIndex = item?.index - 1;
          return {
            ...item,
            index: newIndex,
          };
        }),
      ];
    },
  },
});

// Xuất ra các action và reducer
export const {
  init,
  addItem,
  decrease,
  increase,
  removeItem,
  removeItems,
  resetCart,
} = cartSlice.actions;

export const getCartId = (state) => state.cart.id; // selector lấy userId
export const getCartQuantity = (state) => state.cart.quantitySelected; // selector lấy userId
export const getCartItems = (state) => state.cart.items; // selector lấy userId

export default cartSlice.reducer;
