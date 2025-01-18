// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo trạng thái ban đầu
const initialState = {
  id: null, // userId ban đầu là null
  accountName: null,
  accessToken: null,
  mail: null,
  CIC: null,
  info: {
    personal: null,
    // {
    //   CIC: "0456789123",
    //   PhoneNumber: "0456789123",
    //   FirstName: "C",
    //   MiddleName: "Van",
    //   LastName: "Nguyen",
    //   DateOfBirth: "2000-01-01
    //   Sex: 1,
    //   HouseNumber: "73",
    //   Street: "Nguyễn Tri Phương",
    //   Ward: "1",
    //   District: "10",
    //   City: "TP.HCM",
    // },
    shipping: [
      {
        name: "Nguyen Minh Hoang",
        email: "hoangminhng208@gmail.com",
        phoneNumber: "0889795780",
        address: "41D, Chu Van An, Hiep Phu, Tp Thu Duc",
      },
      {
        name: "Nguyen Minh Hoang",
        email: "hoangminhng208@gmail.com",
        phoneNumber: "0889795780",
        address: "Doi 6, thon Vinh Phuoc, thi xa Ba Don, tinh Quang Binh",
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
      state.mail = action.payload?.mail;
      state.accountName = action.payload?.accountName;
      state.accessToken = action.payload?.accessToken;
      state.CIC = action.payload?.CIC;
    },

    // Action để đăng xuất, đặt userId về null
    logout: (state) => {
      state.id = null;
      state.accountName = null;
      state.accessToken = null;
      state.accountName = null;
      state.info.CIC = null;
      state.info.personal = null;
    },

    setPersonalInfo: (state, action) => {
      state.info.personal = action.payload;
    },

    addShippingInfo: (state, action) => {
      state.info.shipping.push(action.payload);
    },

    removeShippingInfo: (state, action) => {
      state.info.shipping = state.info.shipping.filter((i) => {
        return i != action.payload;
      });
    },
  },
});

// Xuất ra các action và reducer
export const {
  login,
  logout,
  setPersonalInfo,
  addShippingInfo,
  removeShippingInfo,
} = userSlice.actions;

export const selectUserId = (state) => state.user.id; // selector lấy userId
export const isLogged = (state) => state.user.id !== null; // Kiểm tra đăng nhập
export const getShippingInfor = (state) => {
  return [...state?.user?.info?.shipping];
};

export const getPersonalInfor = (state) => {
  return state?.user?.info?.personal;
};
export const getAccountInfor = (state) => {
  return {
    id: state.user.id,
    accountName: state.user.accountName,
    accessToken: state.user.accessToken,
    mail: state.user.mail,
    CIC: state.user.CIC,
  };
};

export default userSlice.reducer;
