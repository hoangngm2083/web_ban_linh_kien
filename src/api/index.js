import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const apiPath = {
  account: {
    login: "accounts/login",
    register: "accounts/signup",
  },
  info: {
    personal: "info/personalInfo",
  },
  product: {
    getAll: "products",
    getProductTypes: "productCatalogs",
    getCheapestProducts: "products/top-5-cheap",
  },
  search: {
    searchProducts: "search/products",
  },
  checkout: {
    postInvoice: "invoices",
  },
};

const api = axios.create({
  baseURL: `${apiUrl}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm access token vào headers cho tất cả các request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // Lấy access token từ localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
