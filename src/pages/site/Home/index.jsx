import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../../components/Banner";
import ProductCard from "../../../components/ProductCard";
import useProductServices from "../../../services/product.services";
const Home = () => {
  const data = [
    {
      to: "/link",
      img: "https://bizweb.dktcdn.net/100/190/540/themes/510789/assets/slide-img.jpg?1725375167938",
      title: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum",
    },
    {
      to: "/link",
      img: "https://bizweb.dktcdn.net/100/190/540/themes/510789/assets/slide-img2.jpg?1725375167938",
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const { getProducts } = useProductServices();
  const [products, setProducts] = useState(null);

  //useEffect
  useEffect(() => {
    (async () => {
      const ps = await getProducts(1);
      setProducts(ps);
    })();
  }, [products]);

  const onAddToCart = () => {};

  return (
    <>
      <div className="row mb-4">
        <Banner id="carouselHomeBanner" data={data} />
      </div>
      <div className="row">
        <Container fluid>
          <Row>
            {products?.map((product) => (
              <Col
                key={product.id}
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

export default Home;
