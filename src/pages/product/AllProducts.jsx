import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import useCartServices from "../../services/cart.services";
import useProductServices from "../../services/product.services";
import useSearchServices from "../../services/search.services";

const AllProduct = () => {
  const { getProductsFromDb } = useProductServices();
  const { getPriceScopes } = useSearchServices();
  const { addItem } = useCartServices();
  const [products, setProducts] = useState();

  const location = useLocation();

  //useEffect
  useEffect(() => {
    const priceScopes = getPriceScopes();

    const queryParams = new URLSearchParams(location.search);
    const productCatalogID = queryParams.get("ptype");

    const priceScopeId = queryParams.get("priceScope");

    const page = queryParams.get("page");
    (async () => {
      const ps = await getProductsFromDb({
        productCatalogID,
        price: {
          lte: priceScopes[priceScopeId - 1]?.to,
          gte: priceScopes[priceScopeId - 1]?.from,
        },
        page,
      });

      setProducts(ps);
    })();
  }, [location]);

  const onAddToCart = (item) => {
    addItem({ ...item, quantitySelected: 1 });
  };

  return (
    <>
      <div className="row">
        <Container fluid>
          <Row>
            {products?.map((product, index) => (
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
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AllProduct;
