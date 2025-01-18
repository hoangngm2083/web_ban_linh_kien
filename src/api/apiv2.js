import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const apiv2 = axios.create({
  baseURL: `${apiUrl}/api/v2/`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm access token vào headers cho tất cả các request
apiv2.interceptors.request.use(
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

export default apiv2;
