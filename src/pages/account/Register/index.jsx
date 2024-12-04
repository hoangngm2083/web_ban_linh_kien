import { lazy } from "react";
import { Link } from "react-router-dom";
import authServices from "../../../services/auth.services";
const RegisterForm = lazy(() => import("./forms/RegisterForm"));

const Register = () => {
  const handleRegister = () => {
    authServices.register(data);
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
          <h4 className="text-center">Sign Up</h4>
          <RegisterForm handleSubmit={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default Register;
