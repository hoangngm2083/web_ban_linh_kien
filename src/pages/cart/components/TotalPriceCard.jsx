import React from "react";
import formatMoney from "../../../helpers/formatMoney";

const TotalPriceCard = ({ items }) => {
  const totalDiscount = items?.reduce(
    (total, item) =>
      (total += Number(item?.discountPrice) * Number(item?.quantity)),
    0
  );

  const totalOriginPrice = items?.reduce(
    (total, item) =>
      (total += Number(item?.originPrice) * Number(item?.quantity)),
    0
  );

  const totalPrice = items?.reduce(
    (total, item) => (total += Number(item?.price) * Number(item?.quantity)),
    0
  );
  return (
    <div className="card">
      <div className="card-body">
        <dl className="row border-bottom">
          <dt className="col-6">Total price:</dt>
          <dd className="col-6 text-end">
            ${formatMoney(totalOriginPrice) || 0}
          </dd>

          <dt className="col-6 text-success">Discount:</dt>
          <dd className="col-6 text-success text-end">
            ${formatMoney(totalDiscount) || 0}
          </dd>
        </dl>
        <dl className="row">
          <dt className="col-6">Total:</dt>
          <dd className="col-6 text-end  h5">
            <strong>${formatMoney(totalPrice) || 0}</strong>
          </dd>
        </dl>
        <hr />
        <p className="text-center">
          <img
            src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png"
            alt="..."
            height={26}
          />
        </p>
      </div>
    </div>
  );
};
export default React.memo(TotalPriceCard);
