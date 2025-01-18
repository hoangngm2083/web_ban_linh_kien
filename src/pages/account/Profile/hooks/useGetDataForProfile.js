import { useSelector } from "react-redux";
import useGetData from "../../../../hooks/useGetData";
import {
  getAccountInfor,
  getPersonalInfor,
  getShippingInfor,
  isLogged,
  setPersonalInfo,
} from "../../../../redux/slices/userSlice";
import publicRoutes from "../../../../routes";
import userServices from "../../../../services/user.services";

const getPersonalInfo = (setData) => {
  const { CIC } = useSelector(getAccountInfor);

  if (!CIC) {
    return;
  }

  useGetData({
    setState: setData,
    slice: getPersonalInfor,
    reducer: setPersonalInfo,
    service: async () => await userServices.getPersonalInfo(CIC),
  });
};

const getShippingInfo = (setData) => {
  useGetData({
    setState: setData,
    slice: getShippingInfor,
    handleDataNullAfterCallService: () => {},
  });
};

const useGetDataForProfile = (setPersonalInfo, setShippingInfo) => {
  const iL = useSelector(isLogged);

  if (!iL) {
    navigate(publicRoutes.login.path);
  }

  getPersonalInfo(setPersonalInfo);
  getShippingInfo(setShippingInfo);
};

export default useGetDataForProfile;
