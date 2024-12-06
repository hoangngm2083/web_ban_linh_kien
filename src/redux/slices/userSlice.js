// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo trạng thái ban đầu
const initialState = {
  id: null, // userId ban đầu là null

  accessToken: "",
  info: {
    contact: {},
    shipping: [
      {
        id: 1,
        name: "Nguyen Minh Hoang",
        email: "hoangminhng208@gmail.com",
        phoneNumber: "0889795780",
        address: "41D, Chu Van An, Hiep Phu, Tp Thu Duc",
      },
    ],
  },
};

// Tạo slice cho user
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action để đăng nhập, lưu userId
    login: (state, action) => {
      state.id = action.payload?.id;
      state.email = action.payload?.email;
      state.accessToken = action.payload?.accessToken;
    },

    // Action để đăng xuất, đặt userId về null
    logout: (state) => {
      state.id = null;
      state.email = "";
      state.accessToken = "";
    },

    setInfor: (state, action) => {
      state.info = action.payload;
    },
  },
});

// Xuất ra các action và reducer
export const { login, logout, setInfor } = userSlice.actions;

export const selectUserId = (state) => state.user.id; // selector lấy userId
export const isLogged = (state) => state.user.id !== null; // Kiểm tra đăng nhập
export const getShippingInfor = (state) => {
  return {
    ...state?.user?.info?.shipping[0],
  };
}; // Kiểm tra đăng nhập

export default userSlice.reducer;
