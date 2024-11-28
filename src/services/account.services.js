import { login } from "../redux/slices/userSlice";

// Login
export const loginService = (data, dispatcher) => {
  try {
    // const res = await api.post(apiPath.login, data).then((res) => res.json());
    // handle ...
    const user = {
      id: 1,
      email: data?.email,
      accessToken: "123",
    };
    dispatcher(login(user));
  } catch (e) {
    alert(e?.message);
  }
};

// Register
export const registerService = (data, dispatcher) => {
  try {
    // const res = await api.post(apiPath.register, data).then((res) => res.json());
    // handle ...
    const user = {
      id: 1,
      email: data?.email,
      accessToken: "123",
    };
    dispatcher(login(user));
  } catch (e) {
    alert(e?.message);
  }
};
