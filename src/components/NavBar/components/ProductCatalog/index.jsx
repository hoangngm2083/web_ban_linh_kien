import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProductTypes } from "../../../../redux/slices/productSlice";
import useProductServices from "../../../../services/product.services";
import NavBarBox from "../NavBarBox";
import ProductCatalogEle from "./ProductCatalogEle";

const ProductCatalog = ({ handleUpdateParam }) => {
  const { getProductTypesFromDB } = useProductServices();
  const [productTypes, setProductTypes] = useState(null);
  const res = useSelector(getProductTypes);

  if (productTypes?.length != res?.length) {
    setProductTypes(res);
  }

  useEffect(() => {
    if (!res) {
      (async () => {
        const data = await getProductTypesFromDB();
        setProductTypes(data);
      })();
      return;
    }
  }, []); // Dependency array ensures this runs once

  return (
    <NavBarBox title={"Product Catalog"}>
      {productTypes?.map((productType, index) => (
        <ProductCatalogEle
          handleUpdateParam={handleUpdateParam}
          key={index}
          index={index}
          productType={productType}
        />
      ))}
    </NavBarBox>
  );
};

export default React.memo(ProductCatalog);
