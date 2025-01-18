// src/components/Login.js
import React from "react";
import { signinImage } from "../../../assets/images";
import useAuthServices from "../../../services/auth.services";
import LoginForm from "./forms/LoginForm";

const Login = () => {
  const { login } = useAuthServices();

  const handleLogin = (data) => {
    (async () => {
      await login(data);
    })();
  };

  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <img src={signinImage} alt="..." className="img-fluid" />
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
