// src/components/Login.js
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../services/auth.services";
import LoginForm from "./forms/LoginForm";

const Login = () => {
  const { login } = useAuth();
  const handleLogin = (data) => {
    login(data);
  };

  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <Link to="/">
            <img
              src="../../images/banner/Dell.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
          <Link to="/">
            <img
              src="../../images/banner/Laptops.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-md-6 p-3">
          <h4 className="text-center">Sign In</h4>
          <LoginForm handleSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
