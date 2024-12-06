import React from "react";

const ProductDetail = React.lazy(
  () => import("../pages/product/ProductDetail")
);
const Thanks = React.lazy(() => import("../pages/site/Thanks"));
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
    noNavbar: true,
  },
  register: {
    path: "/auth/register",
    element: Register,
    noNavbar: true,
  },
  blog: {
    path: "/blogs",
    element: Register,
    noNavbar: true,
  },
  introduce: {
    path: "/introduces",
    element: Register,
    noNavbar: true,
  },
  contact: {
    path: "/contacts",
    element: Register,
    noNavbar: true,
  },
  cart: {
    path: "/cart",
    element: Cart,
    noNavbar: true,
  },
  checkout: {
    path: "/checkout",
    element: Checkout,
    noNavbar: true,
  },

  thanks: {
    path: "/thanks",
    element: Thanks,
    noNavbar: true,
  },

  productDetail: {
    path: "/products/:id",
    element: ProductDetail,
  },
  notFound: {
    path: "*",
    element: NotFound,
    noFooter: true,
    noNavbar: true,
  },
};

export const privateRoutes = {};

export default publicRoutes;
