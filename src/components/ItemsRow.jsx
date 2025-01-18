import React from "react";
import { Col } from "react-bootstrap";
import useCartServices from "../services/cart.services";
import ProductCard from "./ProductCard";

const ItemsRow = ({ title, items }) => {
  const { addItem } = useCartServices();
  const onAddToCart = (item) => {
    addItem({ ...item, quantitySelected: 1 });
  };
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0 text-start  flex-grow-1">{title.toUpperCase()}</h5>
        <hr className="flex-grow-1 ms-3" />
      </div>

      {items?.map((item, index) => (
        <Col
          key={index}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="mb-4 p-1"
          style={{
            height: "300px",
          }}
        >
          <ProductCard product={item} onAddToCart={onAddToCart} />
        </Col>
      ))}
    </>
  );
};

export default ItemsRow;
