import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PriceScope from "./components/PriceScope";
import ProductCatalog from "./components/ProductCatalog";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location?.pathname;

  const handleUpdateParam = ({ name = "pType", value = 0 }) => {
    const queryParams = new URLSearchParams(location.search);
    let newpath;

    if (queryParams.get(name) && queryParams.get(name) == value.toString()) {
      queryParams.delete(name);
    } else {
      queryParams.set(name, value);
    }

    if (pathname.includes("products")) {
      newpath = pathname + "?" + queryParams.toString();
    } else {
      newpath = pathname + "products?" + queryParams.toString();
    }

    navigate(newpath);
  };
  return (
    <div className="container-fluid p-0 bg-white">
      <div className="row g-0">
        {pathname.endsWith("products") && (
          <PriceScope handleUpdateParam={handleUpdateParam} />
        )}
        <ProductCatalog handleUpdateParam={handleUpdateParam} />
      </div>
    </div>
  );
};

export default React.memo(Navbar);
