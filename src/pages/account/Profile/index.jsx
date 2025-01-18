import { useState } from "react";
import InfoBox from "./InfoBox";
import useGetDataForProfile from "./hooks/useGetDataForProfile";

const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  useGetDataForProfile(setPersonalInfo, setShippingInfo);
  return (
    <div className="container my-5">
      <h2 className="px-2 py-4 ">Profile</h2>
      <div className="accordion" id="policyAccordion">
        <InfoBox
          title="Personal Informations"
          data={personalInfo && [personalInfo]}
        />

        <InfoBox
          title="Shipping Informations"
          data={shippingInfo && shippingInfo}
        />
      </div>
    </div>
  );
};

export default Profile;
