import React, { lazy } from "react";
const Header = lazy(() => import("../Components/Header"));
const Footer = lazy(() => import("../Components/Footer"));

const DefaultLayout = ({ noFooter, children }) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <div>{children}</div>
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
