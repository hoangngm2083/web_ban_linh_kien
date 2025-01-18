import useSearchServices from "../../../../services/search.services";
import NavBarBox from "../NavBarBox";
import PriceScopeEle from "./PriceScopeEle";

const PriceScope = ({ handleUpdateParam }) => {
  const { getPriceScopes } = useSearchServices();
  const priceScopes = getPriceScopes();
  return (
    <NavBarBox title={"Price Scope"}>
      {priceScopes?.map((priceScope, index) => (
        <PriceScopeEle
          handleUpdateParam={handleUpdateParam}
          priceScope={priceScope}
          key={index}
        />
      ))}
    </NavBarBox>
  );
};

export default PriceScope;
