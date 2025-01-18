import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetData from "../../../../hooks/useGetData";
import { isLogged as isLoggedSlice } from "../../../../redux/slices/userSlice";
import publicRoutes from "../../../../routes";
import userServices from "../../../../services/user.services";

const useGetMyInvoices = (setMyInvoices) => {
  const navigate = useNavigate();
  const isLogged = useSelector(isLoggedSlice);
  if (!isLogged) {
    navigate(publicRoutes.login.path);
  }

  useGetData({
    setState: setMyInvoices,
    service: userServices.getMyInvoices,
  });
};

export default useGetMyInvoices;
