import { useDispatch } from "react-redux";
import api, { apiPath } from "../api";
import { setProductTypes } from "../redux/slices/productSlice";

const useProductServices = () => {
  const dispatch = useDispatch();

  return {
    getProductsFromDb: async (params) => {
      const res = await api.get(apiPath.product.getAll, { params });
      const ps = res.data.data.products;

      return ps;
    },

    getProductsWithNameFromDb: async (name) => {
      const res = await api.get(apiPath.search.searchProducts, {
        params: {
          searchName: name,
        },
      });
      const products = res.data?.data?.products;

      return products;
    },

    getProductFromDb: async (id) => {
      const res = await api.get(apiPath.product.getAll + "/" + id);
      const product = res.data.data?.product;

      return product;
    },
    getProductsWithType: (ptype) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = products.filter((product) => product.type == ptype);

          resolve(data);
        }, 0);
      });
    },
    getProductWithPrice: (fromPrice, toPrice) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = products.filter(
            (product) =>
              product?.price >= fromPrice && product?.price <= toPrice
          );

          resolve(data);
        }, 0);
      });
    },

    getProductTypesFromDB: async () => {
      const res = await api.get(apiPath.product.getProductTypes);
      const productTypes = res.data.data?.productCatalogs;
      dispatch(setProductTypes(productTypes));

      return productTypes;
    },
    getCheapestProductsFromDB: async () => {
      const res = await api.get(apiPath.product.getCheapestProducts);
      const cheapestProduct = res.data.data?.products;

      return cheapestProduct;
    },
  };
};
export default useProductServices;
