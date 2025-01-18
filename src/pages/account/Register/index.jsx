import { lazy } from "react";
import { signupImage } from "../../../assets/images";
import useAuthServices from "../../../services/auth.services";

const RegisterForm = lazy(() => import("./forms/RegisterForm"));

const Register = () => {
  const { register } = useAuthServices();

  const handleRegister = (data) => {
    (async () => {
      await register(data);
    })();
  };

  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <img src={signupImage} alt="..." className="img-fluid" />
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
