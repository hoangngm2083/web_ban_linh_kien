import formatMoney from "../../../helpers/formatMoney";

const MiniInvoiceEle = ({ item }) => {
  return (
    <>
      <div style={{ maxWidth: "60%" }}>
        <h6 className="my-0">{item?.name}</h6>
        <small className="text-muted">{item?.description}</small>
      </div>
      <span className="text-muted">
        ${formatMoney(item?.price * item?.quantity)}
      </span>
    </>
  );
};
export default MiniInvoiceEle;
