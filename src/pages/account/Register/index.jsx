import { lazy } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const RegisterForm = lazy(() => import("./forms/RegisterForm"));

const Register = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRegister = () => {
    // Giả sử userId được nhập từ người dùng

    dispatch(login(userId)); // Lưu userId vào Redux store

    navigate("/");
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
