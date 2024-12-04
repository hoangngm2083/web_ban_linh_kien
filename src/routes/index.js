import React from "react";

const ProductDetail = React.lazy(
  () => import("../pages/product/ProductDetail")
);
const Checkout = React.lazy(() => import("../pages/checkout"));
const Home = React.lazy(() => import("../pages/site/Home"));
const Cart = React.lazy(() => import("../pages/cart"));
const Login = React.lazy(() => import("../pages/account/Login"));
const Register = React.lazy(() => import("../pages/account/Register"));
const NotFound = React.lazy(() => import("../pages/utils/NotFound"));

const publicRoutes = {
  home: {
    path: "/",
    element: Home,
  },

  login: {
    path: "/auth/login",
    element: Login,
  },
  register: {
    path: "/auth/register",
    element: Register,
  },
  blog: {
    path: "/blogs",
    element: Register,
  },
  introduce: {
    path: "/introduces",
    element: Register,
  },
  contact: {
    path: "/contacts",
    element: Register,
  },
  cart: {
    path: "/cart",
    element: Cart,
  },
  checkout: {
    path: "/checkout",
    element: Checkout,
  },

  productDetail: {
    path: "/products/:id",
    element: ProductDetail,
  },
  notFound: {
    path: "*",
    element: NotFound,
    noFooter: true,
  },
};

export const privateRoutes = {};

export default publicRoutes;
