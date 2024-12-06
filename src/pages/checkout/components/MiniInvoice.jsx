import React from "react";
import formatMoney from "../../../helpers/formatMoney";
import MiniInvoiceEle from "./MiniInvoiceEle";

const MiniInvoice = ({ items, totalPrice }) => {
  return (
    <ul className="list-group list-group-flush">
      {items?.map((item, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between lh-sm"
        >
          <MiniInvoiceEle item={item} />
        </li>
      ))}
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (VND)</span>
        <strong>${formatMoney(totalPrice)}</strong>
      </li>
    </ul>
  );
};
export default React.memo(MiniInvoice);
