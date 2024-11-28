import React, { useEffect, useState } from "react";
import api from "../../../api";
const Home = () => {
  const [value, setValue] = useState("");
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
      <h1> Home Page</h1>
      <p>{value}</p>
    </>
  );
};

export default Home;
