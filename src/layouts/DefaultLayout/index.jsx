import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

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
