import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropBox from "../../../components/DropBox";
import { getProductTypes } from "../../../redux/slices/productSlice";
import publicRoutes from "../../../routes";
import useProductServices from "../../../services/product.services";

const TopMenu = () => {
  const { getProductTypesFromDB } = useProductServices();
  const [productTypes, setProductTypes] = useState(null);
  const res = useSelector(getProductTypes);
  useEffect(() => {
    if (!res) {
      (async () => {
        const data = await getProductTypesFromDB();
        setProductTypes(data);
      })();
      return;
    }
    setProductTypes(res);
  }, []); // Dependency array ensures this runs once

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-sm">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle fw-bold"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                Products
              </button>
              <DropBox data={productTypes} />
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={publicRoutes.blog.path}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={publicRoutes.introduce.path}>
                Introduce
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={publicRoutes.contact.path}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(TopMenu);
