// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo trạng thái ban đầu
const initialState = {
  userId: null, // userId ban đầu là null
};

// Tạo slice cho user
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action để đăng nhập, lưu userId
    login: (state, action) => {
      state.userId = action.payload;
    },
    // Action để đăng xuất, đặt userId về null
    logout: (state) => {
      state.userId = null;
    },
  },
});

// Xuất ra các action và reducer
export const { login, logout } = userSlice.actions;

export const selectUserId = (state) => state.user.userId; // selector lấy userId
export const isLogged = (state) => state.user.userId !== null; // Kiểm tra đăng nhập

export default userSlice.reducer;
