import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  addSelectedItem,
  decrease,
  getCartId as getCartIdSlice,
  getCartItems as getCartItemsSlice,
  getCartQuantity as getCartQuantitySlice,
  getSelectedItems as getSelectedItemsSlice,
  increase,
  init,
  removeItem,
  removeSelectedItem,
} from "../redux/slices/cartSlice";

const useCartServices = function () {
  const dispatch = useDispatch();
  const getCartId = () => useSelector(getCartIdSlice);
  const getCartQuantity = () => useSelector(getCartQuantitySlice);
  const getCartItems = () => useSelector(getCartItemsSlice);
  const getSelectedItems = () => useSelector(getSelectedItemsSlice);

  return {
    getCartId,
    getCartQuantity,
    getCartItems,
    getSelectedItems,
    initCart: function (cart) {
      dispatch(init(cart));
    },
    addItem: (item) => {
      dispatch(addItem(item));
    },
    removeItem: function (item) {
      dispatch(removeItem(item));
    },
    decrease: function (item) {
      dispatch(decrease(item));
    },
    increase: function (item) {
      dispatch(increase(item));
    },
    addSelectedItem: (item) => {
      dispatch(addSelectedItem(item));
    },
    removeSelectedItem: function (item) {
      dispatch(removeSelectedItem(item));
    },
  };
};
export default useCartServices;
