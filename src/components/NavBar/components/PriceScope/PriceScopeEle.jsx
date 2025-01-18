import formatMoney from "../../../../helpers/formatMoney";

const PriceScopeEle = ({ priceScope, handleUpdateParam }) => {
  return (
    <div
      className="bg-white text-black p-1 fs-6 fw-bold d-flex justify-content-between"
      style={{
        border: "1px dashed #cccccc",
        marginLeft: "-1px",
        marginRight: "-1px",
      }}
    >
      <div
        onClick={() => {
          handleUpdateParam({
            name: "priceScope",
            value: priceScope.id,
          });
        }}
        className="text-decoration-none"
      >
        <div className="bg-white text-black p-3 pb-1 fs-6 fw-bold">
          <p>
            {formatMoney(priceScope?.from)} - {formatMoney(priceScope?.to)} vnd
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceScopeEle;
