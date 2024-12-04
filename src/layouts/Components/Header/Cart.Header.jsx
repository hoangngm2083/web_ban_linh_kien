import React from "react";
import { Link } from "react-router-dom";
import publicRoutes from "../../../routes";
import cartServices from "../../../services/cart.services";

const CartHeader = () => {
  const { getCartQuantity } = cartServices();
  const cartQuantity = getCartQuantity();

  return (
    <Link to={publicRoutes.cart.path} className="btn btn-primary">
      <i className="bi bi-cart3"></i>
      <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
        {cartQuantity}
      </div>
    </Link>
  );
};

export default React.memo(CartHeader);
