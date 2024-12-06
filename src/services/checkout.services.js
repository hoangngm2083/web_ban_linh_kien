import { useDispatch, useSelector } from "react-redux";
import apiPayment from "../api/apiPayment";
import {
  addSelectedToCheckoutItems,
  getSelectedToCheckoutItems,
  getTotal,
  removeSelectedToCheckoutItem,
  resetCheckout,
} from "../redux/slices/checkoutSlice";
import { getShippingInfor, setInfor } from "../redux/slices/userSlice";

const useCheckoutServices = () => {
  const dispatch = useDispatch();

  return {
    getShipingInfo: () => {
      const data = useSelector(getShippingInfor);

      if (!data) {
        // call api
        //data = await ...
      }
      return data;
    },
    getTotal: () => useSelector(getTotal),

    getSelectedToCheckoutItems: () => useSelector(getSelectedToCheckoutItems),

    reset: () => {
      dispatch(reset());
    },

    addSelectedToCheckoutItems: (item) => {
      dispatch(addSelectedToCheckoutItems(item));
    },

    removeSelectedToCheckoutItem: (item) => {
      dispatch(removeSelectedToCheckoutItem(item));
    },
    resetCheckout: () => {
      dispatch(resetCheckout());
    },

    setShippingInfo: (shippingInfo) => {
      dispatch(setInfor(shippingInfo));

      // call post Api
      // post shippingInfo to backend
    },

    getPaymentUrl: ({ amount, type = "VNPay" }) => {
      return apiPayment(amount);
    },
  };
};

export default useCheckoutServices;
