import formatMoney from "../../../helpers/formatMoney";

const MiniInvoiceEle = ({ item }) => {
  return (
    <>
      <div style={{ maxWidth: "60%" }}>
        <h6 className="my-0">{item?.productName}</h6>
        {/* <small className="text-muted">{item?.description}</small> */}
      </div>
      <span className="text-muted">{item.quantitySelected}</span>
      <span className="text-muted">
        $
        {formatMoney(
          ((item?.price * (100 - item?.sale)) / 100) * item?.quantitySelected
        )}
      </span>
    </>
  );
};
export default MiniInvoiceEle;
