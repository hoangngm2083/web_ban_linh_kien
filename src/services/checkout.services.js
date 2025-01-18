import { useDispatch, useSelector } from "react-redux";
import { apiPath } from "../api";
import apiPayment from "../api/apiPayment";
import apiv2 from "../api/apiv2";
import {
  addSelectedToCheckoutItems,
  getSelectedToCheckoutItems,
  getTotal,
  removeSelectedToCheckoutItem,
  resetCheckout,
  setInvoice,
} from "../redux/slices/checkoutSlice";
import { addShippingInfo, getShippingInfor } from "../redux/slices/userSlice";

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

    resetCheckout: () => {
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
      dispatch(addShippingInfo(shippingInfo));

      // call post Api
      // post shippingInfo to backend
    },
    setInvoice: (invoice) => {
      dispatch(setInvoice(invoice));
    },

    postInvoiceToDb: async (data) => {
      const res = await apiv2.post(apiPath.checkout.postInvoice, data);

      return res;
    },

    getPaymentUrl: ({ amount, type = "VNPay" }) => {
      return apiPayment(amount);
    },
  };
};

export default useCheckoutServices;
