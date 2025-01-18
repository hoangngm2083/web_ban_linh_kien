import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductTypes,
  updateChildProductTypes,
} from "../../../../redux/slices/productSlice";

const ProductCatalogEle = ({ productType, index, handleUpdateParam }) => {
  const [expandedCatalogs, setExpandedCatalogs] = useState(false); // Trạng thái theo dõi catalog mở rộng

  // Toggle trạng thái mở rộng của một catalog
  const ps = useSelector(getProductTypes);
  const productTypes = [...ps];

  const dispatch = useDispatch();

  const toggleCatalog = () => {
    if (!expandedCatalogs) {
      productTypes.splice(index + 1, 0, ...productType.childs);
      dispatch(updateChildProductTypes(productTypes));
    } else {
      productTypes.splice(index + 1, productType.childs.length);
      dispatch(updateChildProductTypes(productTypes));
    }

    setExpandedCatalogs((prevState) => !prevState);
  };
  return (
    <div
      className="bg-white text-black p-1 fs-6 fw-bold d-flex justify-content-between"
      style={{
        border: "1px dashed #cccccc",
        marginLeft: "-1px",
        marginRight: "-1px",
      }}
    >
      <React.Fragment key={productType?.productCatalogID}>
        <div
          onClick={() => {
            handleUpdateParam({
              name: "ptype",
              value: productType?.productCatalogID,
            });
          }}
          className="text-decoration-none"
        >
          <div className="bg-white text-black p-3 pb-1 fs-6 fw-bold">
            <p>{productType?.productCatalogName}</p>
          </div>
        </div>
      </React.Fragment>
      {productType.childs?.length > 0 && (
        <button
          className="btn btn-sm "
          style={{
            textDecoration: "underline",
            border: "none",
            cursor: "pointer",
            outline: "none", // Loại bỏ outline
            boxShadow: "none", // Loại bỏ bóng khi focus
          }}
          onClick={() => toggleCatalog(productType.productCatalogID)}
        >
          {expandedCatalogs ? (
            <i className="bi bi-caret-up-fill"></i>
          ) : (
            <i className="bi bi-caret-down-fill"></i>
          )}
        </button>
      )}
    </div>
  );
};

export default ProductCatalogEle;
