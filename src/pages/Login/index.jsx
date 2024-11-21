// src/components/Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/userSlice";

const Login = () => {
  const [userId, setUserId] = useState("");

  const navigate = useNavigate(); // Hook để điều hướng

  const dispatch = useDispatch();

  const handleLogin = () => {
    // Giả sử userId được nhập từ người dùng
    dispatch(login(userId)); // Lưu userId vào Redux store

    navigate("/");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
