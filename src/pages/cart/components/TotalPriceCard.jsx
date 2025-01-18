import React from "react";
import formatMoney from "../../../helpers/formatMoney";

const TotalPriceCard = ({ items, total }) => {
  return (
    <div className="card">
      <div className="card-body">
        <dl className="row border-bottom">
          <dt className="col-6">Total Original Price:</dt>
          <dd className="col-6 text-end">
            ${formatMoney(total?.totalOriginPrice) || 0}
          </dd>

          <dt className="col-6 text-success">Total Discount:</dt>
          <dd className="col-6 text-success text-end">
            ${formatMoney(total?.totalDiscountPrice) || 0}
          </dd>
        </dl>
        <dl className="row">
          <dt className="col-6">Total:</dt>
          <dd className="col-6 text-end  h5">
            <strong>${formatMoney(total?.totalPrice) || 0}</strong>
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
