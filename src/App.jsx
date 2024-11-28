import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import React, { Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import publicRoutes from "./routes/index";

function App() {
  const routes = Object.values(publicRoutes);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.element;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout noFooter={route?.noFooter || false}>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
