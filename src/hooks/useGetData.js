import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetData = ({
  slice = null,
  reducer = null,
  setState = null,
  service = null,
  handleDataNullAfterCallService = null,
}) => {
  const dispath = useDispatch();
  let data = null;

  if (slice) {
    data = useSelector(slice);
  }

  useEffect(() => {
    if (!data) {
      (async () => {
        if (service) {
          data = await service();
        }

        if (!data && handleDataNullAfterCallService) {
          handleDataNullAfterCallService();
        }
        if (!data && reducer) {
          dispath(reducer(data));
        }
        setState(data);
      })();
    } else {
      setState(data);
    }
  }, []);
};

export default useGetData;
