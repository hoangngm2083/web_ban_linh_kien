import React from "react";
import { Link } from "react-router-dom";
import formatMoney from "../../helpers/formatMoney";
const apiUrl = import.meta.env.VITE_API_URL;
function SearchEle({ product }) {
  return (
    <Link
      to={`/products/${product?.productID}`}
      className="d-flex align-items-center border p-2"
      style={{
        width: "560px",
        height: "50px",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* Cột bên trái: Hình ảnh */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "10%" }}
      >
        <img
          crossOrigin="anonymous"
          src={apiUrl + product?.image}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Cột ở giữa: Thông tin sản phẩm */}
      <div
        className="d-flex flex-column justify-content-center px-2"
        style={{ width: "70%" }}
      >
        <div className="fw-bold text-dark">{product?.productName}</div>
        <div className="text-muted small">{product?.describeProduct}</div>
      </div>

      {/* Cột bên phải: Giá và giảm giá */}
      <div
        className="d-flex flex-column justify-content-between text-end"
        style={{ width: "10%" }}
      >
        <div className="fw-bold">
          {formatMoney((product?.price * (100 - product?.sale)) / 100)}
        </div>
        <div className="text-danger small text-decoration-line-through">
          {formatMoney(product?.price)}
        </div>
      </div>
    </Link>
  );
}

export default SearchEle;
