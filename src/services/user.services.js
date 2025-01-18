import api, { apiPath } from "../api";

const handleStatusCode = {
  200: (data) => {},
  401: (data) => {},
};

const userServices = {
  getPersonalInfo: async (CIC) => {
    const pI = await api.get(apiPath.info.personal + "?CIC=" + CIC);

    return pI.data.data.personalInfo;
  },

  getMyInvoices: async () => {
    const pI = await api.get(apiPath.invoices.myInvoice);

    return pI.data?.data?.invoices;
  },
};

export default userServices;
