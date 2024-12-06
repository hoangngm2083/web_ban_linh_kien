// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo trạng thái ban đầu
const initialState = {
  id: null, // userId ban đầu là null
  quantity: 0,
  items: [],
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
    removeItems: (state, action) => {
      const idsToRemove = action.payload.map((item) => {
        state.quantity -= item.quantity;
        return item.id;
      });
      state.items = state.items.filter(
        (item) => !idsToRemove.includes(item.id)
      );
      state.items.forEach((ele, i) => {
        ele.index = i;
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
    },
  },
});

// Xuất ra các action và reducer
export const { init, addItem, decrease, increase, removeItem, removeItems } =
  cartSlice.actions;

export const getCartId = (state) => state.cart.id; // selector lấy userId
export const getCartQuantity = (state) => state.cart.quantity; // selector lấy userId
export const getCartItems = (state) => state.cart.items; // selector lấy userId

export default cartSlice.reducer;
