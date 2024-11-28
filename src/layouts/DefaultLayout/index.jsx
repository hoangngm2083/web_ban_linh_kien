import React, { lazy } from "react";

const Header = lazy(() => import("../Components/Header"));
const Footer = lazy(() => import("../Components/Footer"));
const TopMenu = lazy(() => import("../Components/TopMenu"));

const DefaultLayout = ({ noFooter, children }) => {
  return (
    <>
      <header>
        <Header />
        <TopMenu />
      </header>

      <main className="container-fluid my-3">
        <div className="container-sm">{children}</div>
      </main>

      {!noFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default DefaultLayout;
