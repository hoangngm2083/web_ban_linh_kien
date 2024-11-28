import React from "react";

const ProductDetail = React.lazy(
  () => import("../pages/product/ProductDetail")
);
const Home = React.lazy(() => import("../pages/site/Home"));
const Login = React.lazy(() => import("../pages/account/Login"));
const Register = React.lazy(() => import("../pages/account/Register"));
const NotFound = React.lazy(() => import("../pages/utils/NotFound"));

const publicRoutes = {
  home: {
    path: "/",
    element: Home,
  },

  login: {
    path: "/accounts/login",
    element: Login,
  },
  register: {
    path: "/accounts/register",
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
