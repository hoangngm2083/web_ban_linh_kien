// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo trạng thái ban đầu
const initialState = {
  id: null, // userId ban đầu là null
  quantity: 0,
  items: [],
  selectedItems: [],
};

// Tạo slice cho user
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    init: (state, action) => {
      state.id = action.payload?.id;
      state.quantity = Number(action.payload?.quantity);
      state.items = action.payload?.items;
    },
    addSelectedItem: (state, action) => {
      if (!state.selectedItems) {
        state.selectedItems = [];
      }

      state.selectedItems?.push(action.payload);
    },
    removeSelectedItem: (state, action) => {
      const item = state.selectedItems?.find(
        (item) => item.id == action.payload?.id
      );
      if (!item) return;
      state.selectedItems = state.selectedItems?.filter((item) => {
        return item.id != action.payload?.id;
      });
    },

    addItem: (state, action) => {
      const item = state.items?.find((item) => item.id == action.payload?.id);

      if (!!item) {
        item.quantity += Number(action.payload?.quantity);
        state.quantity += Number(action.payload?.quantity);
        return;
      }
      state.items.push({ ...action.payload, index: state.items.length });
      state.quantity += Number(action.payload?.quantity);
    },
    decrease: (state, action) => {
      const item = state.items[action.payload?.index];
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.quantity -= 1;
      }
    },

    increase: (state, action) => {
      const item = state.items[action.payload?.index];
      item.quantity += 1;
      state.quantity += 1;
    },

    removeItem: (state, action) => {
      state.quantity -= Number(action.payload?.quantity);
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

      state.selectedItems = state.selectedItems.filter(
        (item) => item.id != action.payload?.id
      );
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
  addSelectedItem,
  removeSelectedItem,
} = cartSlice.actions;

export const getCartId = (state) => state.cart.id; // selector lấy userId
export const getCartQuantity = (state) => state.cart.quantity; // selector lấy userId
export const getCartItems = (state) => state.cart.items; // selector lấy userId
export const getSelectedItems = (state) => state.cart.selectedItems;

export default cartSlice.reducer;
