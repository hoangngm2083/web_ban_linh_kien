import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const publicRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "*",
    element: NotFound,
    noFooter: true,
  },
];

export const privateRoutes = {};

export default publicRoutes;
