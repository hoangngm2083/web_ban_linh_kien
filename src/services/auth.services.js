import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api, { apiPath } from "../api";
import {
  login as loginSlice,
  logout as logoutSlice,
} from "../redux/slices/userSlice";

const useAuthServices = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let res = null;
  const login = async (data) => {
    try {
      res = await api.post(apiPath.account.login, {
        AccountName: data?.accountName,
        Password: data?.password,
      });
      console.log(res);

      localStorage.setItem("accessToken", res.data?.token);
      const value = {
        token: res.data?.token,
        id: res.data?.data?.account.AccountID,
        mail: res.data?.data?.account.Mail,
        accountName: res.data?.data?.account.AccountName,
        CIC: res.data?.data?.account.CIC,
      };

      dispatch(loginSlice(value));

      navigate("/");
    } catch (e) {
      alert("Incorrect account or password!");
    }
  };

  const logout = () => {
    // dispatch(resetCart());
    // dispatch(resetCheckout());
    dispatch(logoutSlice());
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const register = async (data) => {
    try {
      const res = await api.post(apiPath.account.register, {
        AccountName: data.accountName,
        Password: data.password,
        PasswordConfirm: data.confirmPassword,
        Mail: data.email,
      });

      localStorage.setItem("accessToken", res.data?.token);
      dispatch(
        loginSlice({
          token: res.data?.token,
          ...res.data?.data?.account,
        })
      );

      navigate("/");
    } catch (e) {
      alert("Account name or email already exists");
    }
  };

  return { login, register, logout };
};

export default useAuthServices;
