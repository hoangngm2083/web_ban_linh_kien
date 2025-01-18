import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import formatMoney from "../helpers/formatMoney";
import useCheckoutServices from "../services/checkout.services";

const ProductCard = ({ product, onAddToCart }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { addSelectedToCheckoutItems } = useCheckoutServices();
  const navigate = useNavigate();

  const handleViewDetail = (product) => {
    navigate("/products/" + product?.productID);
  };

  const handlePurchase = (product) => {
    console.log(product);

    addSelectedToCheckoutItems({
      ...product,
      quantitySelected: 1,
    });
    navigate("/checkout");
  };

  return (
    <div
      className="card position-relative"
      style={{
        backgroundColor: "white",
        color: "black",
        border: "1px solid #e0e0e0",
        borderRadius: "1px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Tag giảm giá */}
      {!!product.sale && product.sale > 0 && (
        <div
          className="position-absolute"
          style={{
            top: "10px",
            right: "10px",
            backgroundColor: "#ff4d4d",
            color: "white",
            padding: "4px 8px",
            borderRadius: "3px",
            fontSize: "0.8rem",
            zIndex: 10,
          }}
        >
          -{product.sale}%
        </div>
      )}

      {/* Tầng 1: Hình ảnh */}
      <div
        style={{
          height: "40%",
          overflow: "hidden",
          padding: "2px",
        }}
      >
        <img
          src={apiUrl + product?.image}
          alt={product?.productName}
          crossOrigin="anonymous"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Tầng 2: Tên sản phẩm */}
      <div
        className="p-2"
        style={{
          height: "25%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        {product?.productName}
      </div>

      {/* Tầng 3: Giá sản phẩm */}
      <div
        className="p-2"
        style={{
          height: "15%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        {!!product?.sale && product?.sale > 0 && (
          <span
            style={{
              textDecoration: "line-through",
              color: "#888",
              marginRight: "10px",
            }}
          >
            {formatMoney(product?.price)}
          </span>
        )}
        <span className="text-primary">
          {formatMoney(product?.price - (product?.price * product?.sale) / 100)}{" "}
          VND
        </span>
      </div>

      <div
        className="p-2"
        style={{
          height: "15%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="text-black">sl: {product?.quantity}</span>
      </div>

      {/* Tầng 4: Nút Thêm vào giỏ hàng */}
      <div
        className="p-1"
        style={{
          //   height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outline-primary"
          className="w-45 d-flex align-items-center justify-content-between"
          style={{
            borderRadius: "1px",
            transition: "all 0.3s ease",
          }}
          onClick={() => onAddToCart(product)}
        >
          <p style={{ margin: "auto" }}>Add to cart</p>
        </Button>
        {/* <Button
          variant="outline-primary"
          className="w-45 d-flex align-items-center justify-content-between"
          style={{
            borderRadius: "1px",
            transition: "all 0.3s ease",
          }}
          onClick={() => handleViewDetail(product)}
        >
          <p style={{ margin: "auto" }}>View Detail</p>
        </Button> */}

        <Button
          variant="outline-primary"
          className="w-45 d-flex align-items-center justify-content-between"
          style={{
            borderRadius: "1px",
            transition: "all 0.3s ease",
          }}
          onClick={() => handlePurchase(product)}
        >
          <p style={{ margin: "auto" }}>Purchase</p>
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
