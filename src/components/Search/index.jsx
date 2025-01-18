import HeadlessTippy from "@tippyjs/react/headless";
import React, { useEffect, useState } from "react";
import useProductServices from "../../services/product.services";
import SearchEle from "./SearchEle";

const Search = () => {
  const { getProductsWithNameFromDb } = useProductServices();
  const [products, setProducts] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  useEffect(() => {
    if (searchValue?.trim().length > 0) {
      const timeoutId = setTimeout(async () => {
        const products = await getProductsWithNameFromDb(searchValue);
        console.log(products);
        setProducts(products);
        setShowResult(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [searchValue]);
  const handleHideResult = () => {
    setShowResult(false);
  };

  // const handleSearch = async () => {
  //   const products = await getProductsWithNameFromDb(searchValue);
  //   console.log(products);

  //   setProducts(products);
  // };

  return (
    <form action="#" className="search">
      <HeadlessTippy
        interactive
        offset={[-20, 5]}
        visible={showResult && products && products?.length > 0}
        render={(attrs) => (
          <div className="bg-white" tabIndex="-1" {...attrs}>
            <>
              {products?.map((product, index) => (
                <SearchEle key={index} product={product} />
              ))}
            </>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className="input-group">
          <input
            id="search"
            name="search"
            type="text"
            className="form-control"
            placeholder="Search with product's name"
            required
            onChange={(event) => {
              let value = event.target.value;

              if (value?.trim()?.length) {
                setProducts([]);
              }

              if (!value.startsWith(" ")) {
                setSearchValue(value);
              }
            }}
            value={searchValue}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          <label className="visually-hidden" htmlFor="search"></label>
          <button
            className="btn btn-primary text-white"
            type="submit"
            aria-label="Search"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </HeadlessTippy>
    </form>
  );
};
export default React.memo(Search);
