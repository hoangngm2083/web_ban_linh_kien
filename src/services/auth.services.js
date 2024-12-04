import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginSlice } from "../redux/slices/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (data) => {
    try {
      // const res = await api.post(apiPath.account.login, data).then((res) => res.json());
      // handle ...
      const user = {
        id: 1,
        email: data?.email,
        accessToken: "123",
      };

      dispatch(loginSlice(user)); // Sử dụng dispatch trong hook
      navigate("/");
    } catch (e) {
      alert(e?.message);
    }
  };

  const register = (data) => {
    try {
      // const res = await api.post(apiPath.account.register, data).then((res) => res.json());
      // handle ...
      const user = {
        id: 1,
        email: data?.email,
        accessToken: "123",
      };
      dispatch(loginSlice(user)); // Sử dụng dispatch trong hook
      // useNavigate("/");
    } catch (e) {
      alert(e?.message);
    }
  };

  return { login, register };
};

export default useAuth;
