import React from "react";
import { Link } from "react-router-dom";

const DropBox = ({ data }) => (
  <>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      {data?.map((d, index) => {
        return (
          <li key={index}>
            <Link
              className="dropdown-item"
              to={`/products?ptype=${d?.productCatalogID}`}
            >
              {d?.productCatalogName.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  </>
);
export default React.memo(DropBox);
