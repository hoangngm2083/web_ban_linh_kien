import React, { lazy } from "react";
import NavBar from "../../components/NavBar";

const Header = lazy(() => import("../Components/Header"));
const Footer = lazy(() => import("../Components/Footer"));
const TopMenu = lazy(() => import("../Components/TopMenu"));

const DefaultLayout = ({ noFooter, children, noNavbar }) => {
  return (
    <>
      <header>
        <Header />
        <TopMenu />
      </header>

      <main
        style={{
          minHeight: "80vh",
        }}
        className="container-fluid py-3 bg-light "
      >
        <div className=" h-100 container-sm ">
          {noNavbar && (
            <div className="row">
              <div className="col-3 ">
                <NavBar />
              </div>
              <div className="col bg-white h-100">{children}</div>
            </div>
          )}
          {!noNavbar && <div className="bg-white">{children}</div>}
        </div>
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
