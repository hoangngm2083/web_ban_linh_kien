import React from "react";

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
    path: "/account/login",
    element: Login,
  },
  register: {
    path: "/account/register",
    element: Register,
  },
  notFound: {
    path: "*",
    element: NotFound,
    noFooter: true,
  },
};

export const privateRoutes = {};

export default publicRoutes;
