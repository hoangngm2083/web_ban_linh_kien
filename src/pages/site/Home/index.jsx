import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "../../../components/Banner";
import ItemsRow from "../../../components/ItemsRow";
import useCartServices from "../../../services/cart.services";
import useProductServices from "../../../services/product.services";
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

const Home = () => {
  // init hook
  const { getProductsFromDb, getCheapestProductsFromDB } = useProductServices();
  const { addItem } = useCartServices();

  // setup state
  const [products, setProducts] = useState(null);
  const [cheapestProducts, setCheapestProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const ps = await getProductsFromDb();
      setProducts(ps);
    })();

    (async () => {
      const cps = await getCheapestProductsFromDB();
      setCheapestProducts(cps);
    })();
  }, []);

  return (
    <>
      <div className="row mb-4">
        <Banner id="carouselHomeBanner" data={data} />
      </div>
      <div className="row">
        <Container fluid>
          <Row>
            <ItemsRow
              items={cheapestProducts?.slice(0, 4)}
              title={"Top cheapest products"}
            />
          </Row>
          <Row>
            <ItemsRow items={products} title={"Another products"} />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
