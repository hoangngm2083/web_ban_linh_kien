// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo trạng thái ban đầu
const initialState = {
  quantity: 0,
  totalDiscountPrice: 0,
  totalPrice: 0,
  totalOriginPrice: 0,
  selectedToCheckoutItems: [],
};

// Tạo slice cho user
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    resetCheckout: (state, action) => {
      state.quantity = 0;
      state.totalDiscountPrice = 0;
      state.totalPrice = 0;
      state.totalOriginPrice = 0;
      state.selectedToCheckoutItems = [];
    },

    addSelectedToCheckoutItems: (state, action) => {
      if (!state.selectedToCheckoutItems) {
        state.selectedToCheckoutItems = [];
      }
      state.selectedToCheckoutItems?.push(action.payload);
      //
      state.quantity += Number(action.payload?.quantity);
      state.totalDiscountPrice +=
        Number(action.payload?.discountPrice) *
        Number(action.payload?.quantity);
      state.totalOriginPrice +=
        Number(action.payload?.originPrice) * Number(action.payload?.quantity);
      state.totalPrice +=
        Number(action.payload?.price) * Number(action.payload?.quantity);
    },
    removeSelectedToCheckoutItem: (state, action) => {
      const item = state.selectedToCheckoutItems?.find(
        (item) => item.id == action.payload?.id
      );
      if (!item) return;
      state.selectedToCheckoutItems = state.selectedToCheckoutItems?.filter(
        (item) => {
          if (item.id != action.payload?.id) {
            return true;
          }
          state.quantity -= Number(item.quantity);
          state.totalDiscountPrice -=
            Number(item.discountPrice) * Number(item.quantity);
          state.totalOriginPrice -=
            Number(item.originPrice) * Number(item.quantity);
          state.totalPrice -= Number(item.price) * Number(item.quantity);
          return false;
        }
      );
    },
  },
});

// Xuất ra các action và reducer
export const {
  addSelectedToCheckoutItems,
  removeSelectedToCheckoutItem,
  resetCheckout,
} = checkoutSlice.actions;

export const getTotal = (state) => {
  return {
    totalDiscountPrice: state.checkout.totalDiscountPrice,
    totalPrice: state.checkout.totalPrice,
    totalOriginPrice: state.checkout.totalOriginPrice,
    quantity: state.checkout.quantity,
  };
};
export const getSelectedToCheckoutItems = (state) =>
  state.checkout?.selectedToCheckoutItems;

export default checkoutSlice.reducer;
