import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductServices from "../services/product.services";

const Navbar = () => {
  const { getProductTypes, getProductTypesFromDB } = useProductServices();
  const [productTypes, setProductTypes] = useState(null);

  useEffect(() => {
    const res = getProductTypes();
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
    <div className="container-fluid p-0 bg-white">
      <div className="row g-0">
        <div className="col-12  text-uppercase">
          <React.Fragment key={0}>
            <Link to={`/products`} className="text-decoration-none">
              <div
                className="bg-primary text-white p-3 text-center fs-5 fw-bold"
                style={{
                  borderBottom: "1px solid white",
                }}
              >
                Product Types
              </div>
            </Link>
          </React.Fragment>
          {productTypes?.map((productType, index) => (
            <React.Fragment key={productType?.id}>
              <Link
                to={`/products?ptype=${productType?.id}`}
                className="text-decoration-none"
              >
                <div
                  className="bg-white text-black p-3 pb-1 fs-6 fw-bold"
                  style={{
                    border: "1px dashed #cccccc",
                    marginLeft: "-1px",
                    marginRight: "-1px",
                    display: "flex",
                  }}
                >
                  <p>{productType?.name}</p>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
