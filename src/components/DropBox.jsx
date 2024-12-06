import React from "react";
import { Link } from "react-router-dom";

const DropBox = ({ data }) => (
  <>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      {data?.map((d, index) => {
        return (
          <li key={index}>
            <Link className="dropdown-item" to={d?.path}>
              {d?.name.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  </>
);
export default React.memo(DropBox);
