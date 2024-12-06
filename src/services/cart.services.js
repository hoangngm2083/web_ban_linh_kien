import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  getCartId as getCartIdSlice,
  getCartItems as getCartItemsSlice,
  getCartQuantity as getCartQuantitySlice,
  increase,
  init,
  removeItem,
  removeItems,
} from "../redux/slices/cartSlice";
import { removeSelectedToCheckoutItem } from "../redux/slices/checkoutSlice";

const useCartServices = function () {
  const dispatch = useDispatch();
  const getCartId = () => useSelector(getCartIdSlice);
  const getCartQuantity = () => useSelector(getCartQuantitySlice);
  const getCartItems = () => useSelector(getCartItemsSlice);

  return {
    getCartId,
    getCartQuantity,
    getCartItems,
    initCart: function (cart) {
      dispatch(init(cart));
    },
    addItem: (item) => {
      dispatch(addItem(item));
    },
    removeItem: function (item) {
      dispatch(removeItem(item));
      dispatch(removeSelectedToCheckoutItem(item));
    },

    removeItems: function (items) {
      dispatch(removeItems(items));
    },
    decrease: function (item) {
      dispatch(decrease(item));
    },
    increase: function (item) {
      dispatch(increase(item));
    },
  };
};
export default useCartServices;
