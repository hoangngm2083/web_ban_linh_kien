import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logo } from "../../../assets/images";

import { isLogged } from "../../../redux/slices/userSlice";
import publicRoutes from "../../../routes";
import CartHeader from "./Cart.Header";

const Search = lazy(() => import("../../../components/Search"));

const Header = () => {
  const loggedIn = useSelector(isLogged);
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row ">
          <div className="col-md-9 py-1 text-secondary">
            Get connected with us on social networks!
          </div>
          <div className="col-md-3 py-1 text-center text-secondary">
            <Link to="/" title="Apple">
              <i className="bi bi-apple text-secondary me-3"></i>
            </Link>
            <Link to="/" title="Windows">
              <i className="bi bi-windows text-secondary me-3"></i>
            </Link>
            <Link to="/" title="Android">
              <i className="bi bi-android2 text-secondary me-3"></i>
            </Link>
            |
            <Link to="/" title="Twitter">
              <i className="bi bi-twitter-x text-secondary ms-3 me-3"></i>
            </Link>
            <Link to="/" title="Facebook">
              <i className="bi bi-facebook text-secondary me-3"></i>
            </Link>
            <Link to="/" title="Instagram">
              <i className="bi bi-instagram text-secondary me-3"></i>
            </Link>
            <Link to="/" title="Youtube">
              <i className="bi bi-youtube text-secondary me-3"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-3 border-bottom bg-light">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-md-3 text-center">
              <Link to="/">
                <img alt="logo" src={logo} />
              </Link>
            </div>
            <div className="col-md-5">
              <Search />
            </div>
            <div className="col-md-4 ">
              <div className="position-relative d-inline me-3">
                <CartHeader />
              </div>
              {loggedIn && (
                <>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-secondary rounded-circle border me-3"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="Profile"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bi bi-person-fill text-light"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/account/profile">
                          <i className="bi bi-person-square"></i> My Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/star/zone">
                          <i className="bi bi-star-fill text-warning"></i> Star
                          Zone
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/account/orders">
                          <i className="bi bi-list-check text-primary"></i>{" "}
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/account/wishlist">
                          <i className="bi bi-heart-fill text-danger"></i>{" "}
                          Wishlist
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/account/notification"
                        >
                          <i className="bi bi-bell-fill text-primary"></i>
                          Notification
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/support">
                          <i className="bi bi-info-circle-fill text-success"></i>
                          Support
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          <i className="bi bi-door-closed-fill text-danger"></i>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              )}

              {!loggedIn && (
                <>
                  <div className="position-relative d-inline me-3">
                    <Link
                      className="btn btn-primary"
                      to={publicRoutes.login.path}
                    >
                      Sign In
                    </Link>
                  </div>
                  <div className="position-relative d-inline me-3">
                    <Link
                      className="btn btn-primary"
                      to={publicRoutes.register.path}
                    >
                      Sign Up
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
