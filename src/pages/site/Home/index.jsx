import React, { useEffect, useState } from "react";
import api from "../../../api";
import Banner from "../../../components/Banner";
const Home = () => {
  const [value, setValue] = useState("");

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

  //useEffect
  useEffect(() => {
    (async () =>
      await api
        .get("todos/1")
        .then((res) => {
          setValue(JSON.stringify(res.data));
        })
        .catch((error) => console.log(error)))();
  }, []);

  return (
    <>
      <Banner id="carouselHomeBanner" data={data} />
      <h1> Home Page</h1>
      <p>{value}</p>
    </>
  );
};

export default Home;
