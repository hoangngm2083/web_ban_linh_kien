// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo trạng thái ban đầu
const initialState = {
  quantitySelected: 0,
  totalDiscountPrice: 0,
  totalPrice: 0,
  totalOriginPrice: 0,
  selectedToCheckoutItems: [],
  invoice: null,
};

// Tạo slice cho user
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setInvoice: (state, action) => {
      state.invoice = {
        PaidMethod: action.payload?.paymentMethod,
        IsPaid: action.payload?.isPaid || 1,
        ShippingInfo:
          "" +
          action.payload?.shippingInfor?.name +
          ", " +
          action.payload?.shippingInfor?.phoneNumber +
          ", " +
          action.payload?.shippingInfor?.address,
        SelectedProducts: action.payload?.items.map((ele) => {
          return {
            ProductID: ele.productID,
            OrderedNumber: ele.quantitySelected,
          };
        }),
      };
    },
    resetCheckout: (state, action) => {
      state.quantitySelected = 0;
      state.totalDiscountPrice = 0;
      state.totalPrice = 0;
      state.totalOriginPrice = 0;
      state.selectedToCheckoutItems = [];
      state.invoice = null;
    },

    addSelectedToCheckoutItems: (state, action) => {
      if (!state.selectedToCheckoutItems) {
        state.selectedToCheckoutItems = [];
      }
      state.selectedToCheckoutItems?.push(action.payload);
      //
      state.quantitySelected += Number(action.payload?.quantitySelected);
      state.totalDiscountPrice +=
        ((Number(action.payload?.price) * Number(action.payload?.sale)) / 100) *
        Number(action.payload?.quantitySelected);

      state.totalOriginPrice +=
        Number(action.payload?.price) *
        Number(action.payload?.quantitySelected);

      state.totalPrice +=
        ((Number(action.payload?.price) *
          (100 - Number(action.payload?.sale))) /
          100) *
        Number(action.payload?.quantitySelected);
    },

    removeSelectedToCheckoutItem: (state, action) => {
      const item = state.selectedToCheckoutItems?.find(
        (item) => item.productID == action.payload?.productID
      );
      if (!item) return;
      state.selectedToCheckoutItems = state.selectedToCheckoutItems?.filter(
        (item) => {
          if (item.productID != action.payload?.productID) {
            return true;
          }
          state.quantitySelected -= Number(item.quantitySelected);
          state.totalDiscountPrice -=
            ((Number(item.price) * Number(item.sale)) / 100) *
            Number(item.quantitySelected);

          state.totalOriginPrice -=
            Number(item.price) * Number(item.quantitySelected);

          state.totalPrice -=
            ((Number(item.price) * (100 - Number(item.sale))) / 100) *
            Number(item.quantitySelected);

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
  setInvoice,
} = checkoutSlice.actions;

export const getTotal = (state) => {
  return {
    totalDiscountPrice: state.checkout.totalDiscountPrice,
    totalPrice: state.checkout.totalPrice,
    totalOriginPrice: state.checkout.totalOriginPrice,
    quantitySelected: state.checkout.quantitySelected,
  };
};
export const getSelectedToCheckoutItems = (state) =>
  state.checkout?.selectedToCheckoutItems;

export const getInvoice = (state) => {
  console.log("state.checkout?.invoice: ", state?.checkout?.invoice);

  return state?.checkout?.invoice;
};

export default checkoutSlice.reducer;
