import axios from "axios";

export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
});

export const apiPath = {
  account: {
    login: "account/login",
    login: "account/register",
  },
  product: {
    get: "products/",
  },
};
