import { useDispatch, useSelector } from "react-redux";
import { setProductTypes } from "../redux/slices/productSlice";

const products = [
  {
    id: 1,
    name: "Raspberry Pi Model 3+",
    price: 1150000,
    discountPrice: 50000,
    originPrice: 1200000,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwhyjp9SwNyVpBl-cRvq9u3EPkiILiqwdp2N5dsTL2MkgOK-PazJ8pttVYkc4akmtMstdiVOpGPfKeQp8MTE4qile28uZuY-lVJ4yt4_ehDFbX4rSjsESGi3Y",
  },
  {
    id: 2,
    name: "Mạch sạc nhanh pin 18650 5V2.4A có led hiển thị",
    price: 1150000,
    discountPrice: 50000,
    originPrice: 1200000,
    img: "https://bizweb.dktcdn.net/thumb/large/100/190/540/products/mach-sac-nhanh-pin-18650-5v2-4a-jpeg.jpg?v=1732245954353",
  },
  {
    id: 3,
    name: "Mạch sạc nhanh pin 18650 5V2.4A có led hiển thị",
    price: 1150000,
    discountPrice: 50000,
    originPrice: 1200000,
    img: "https://bizweb.dktcdn.net/thumb/large/100/190/540/products/mach-sac-nhanh-pin-18650-5v2-4a-jpeg.jpg?v=1732245954353",
  },
  {
    id: 4,
    name: "Mạch sạc nhanh pin 18650 5V2.4A có led hiển thị",
    price: 1150000,
    discountPrice: 50000,
    originPrice: 1200000,
    img: "https://bizweb.dktcdn.net/thumb/large/100/190/540/products/mach-sac-nhanh-pin-18650-5v2-4a-jpeg.jpg?v=1732245954353",
  },
  {
    id: 5,
    name: "Mạch sạc nhanh pin 18650 5V2.4A có led hiển thị",
    price: 1150000,
    discountPrice: 50000,
    originPrice: 1200000,
    img: "https://bizweb.dktcdn.net/thumb/large/100/190/540/products/mach-sac-nhanh-pin-18650-5v2-4a-jpeg.jpg?v=1732245954353",
  },
  {
    id: 6,
    name: "Mạch sạc nhanh pin 18650 5V2.4A có led hiển thị",
    price: 1150000,
    discountPrice: 50000,
    originPrice: 1200000,
    img: "https://bizweb.dktcdn.net/thumb/large/100/190/540/products/mach-sac-nhanh-pin-18650-5v2-4a-jpeg.jpg?v=1732245954353",
  },
];

// const productTypes =

const useProductServices = () => {
  const dispatch = useDispatch();
  const productTypesFromState = useSelector((state) => state.productTypes);
  //   get: async (id) => {
  //     try {
  //       const product = await api
  //         .get(apiPath.product.get + id)
  //         .then((res) => res.json());
  //       return product;
  //     } catch (e) {
  //       handleErrorServices(e?.message);
  //     }
  //   },
  return {
    getProducts: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 0);
      });
    },

    getProduct: (id) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const product = products[id - 1];
          resolve(product);
        }, 0);
      });
    },

    getProductTypes: () => {
      return productTypesFromState;
    },
    getProductTypesFromDB: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const productTypes = [
            {
              name: "Raspberry pi",
              id: "raspberryPi",
            },
            {
              name: "Robot",
              id: "robot",
            },
            {
              name: "Arduino",
              id: "adruino",
            },
          ];
          const pts = productTypes.map((pt) => {
            return { ...pt, path: "/products?pType" + pt?.id };
          });
          dispatch(setProductTypes(pts));
          resolve(pts);
        }, 0);
      });
    },
  };
};
export default useProductServices;
