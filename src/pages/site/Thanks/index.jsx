import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import formatMoney from "../../../helpers/formatMoney";
import { getInvoice } from "../../../redux/slices/checkoutSlice";
import useCartServices from "../../../services/cart.services";
import useCheckoutServices from "../../../services/checkout.services";
const apiUrl = import.meta.env.VITE_API_URL;
const Thanks = () => {
  const { removeItems } = useCartServices();
  const {
    getSelectedToCheckoutItems,
    getShipingInfo,
    resetCheckout,
    postInvoiceToDb,
  } = useCheckoutServices();

  const [products, setProducts] = useState([]);
  const [transaction, setTransaction] = useState({
    status: "",
    transactionCode: "",
    amount: 0,
    paymentTime: "",
    orderInfo: "",
  });

  const location = useLocation();
  const invoice = useSelector(getInvoice);
  const ps = getSelectedToCheckoutItems();
  const shipingInfo = invoice?.ShippingInfo;

  useEffect(() => {
    setProducts(ps);

    const queryParams = new URLSearchParams(location.search);

    const vnp_ResponseCode = queryParams.get("vnp_ResponseCode");
    const vnp_TxnRef = queryParams.get("vnp_TxnRef");
    const vnp_Amount = queryParams.get("vnp_Amount");
    const vnp_PayDate = queryParams.get("vnp_PayDate");
    const vnp_OrderInfo = queryParams.get("vnp_OrderInfo");

    const formatPaymentTime = (payDate) => {
      if (!payDate) return "";
      const year = payDate.slice(0, 4);
      const month = payDate.slice(4, 6);
      const day = payDate.slice(6, 8);
      const hour = payDate.slice(8, 10);
      const minute = payDate.slice(10, 12);
      const second = payDate.slice(12, 14);
      return `${hour}:${minute}:${second} ${day}/${month}/${year}`;
    };

    setTransaction({
      status: vnp_ResponseCode === "00" ? "Success" : "Error",
      transactionCode: vnp_TxnRef,
      amount: parseInt(vnp_Amount) / 100,
      paymentTime: formatPaymentTime(vnp_PayDate),
      orderInfo: vnp_OrderInfo,
    });

    if (vnp_ResponseCode === "00") {
      (async () => {
        const res = await postInvoiceToDb(invoice);
        console.log("res", res);
        removeItems(ps);
        resetCheckout();
      })();
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Transaction Details - Left Side */}
        <div className="col-md-6 border-end p-3">
          <div className="row">
            <h4 className="mb-4">Transaction Detail</h4>
            <div className="list-group">
              <div className="list-group-item">
                <strong>Transaction code:</strong>{" "}
                {transaction?.transactionCode}
              </div>
              <div className="list-group-item">
                <strong>Total:</strong> {formatMoney(transaction?.amount)} VND
              </div>
              <div className="list-group-item">
                <strong>Status:</strong> {transaction?.status}
              </div>
              <div className="list-group-item">
                <strong>Paid at:</strong> {transaction.paymentTime}
              </div>
              <div className="list-group-item">
                <strong>Message:</strong> {transaction.content}
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <h4 className="mb-4">Shipping Info</h4>
            <div className="list-group">
              <div className="list-group-item">{shipingInfo}</div>
            </div>
          </div>
        </div>

        {/* Product Details - Right Side */}
        <div className="col-md-6 p-3">
          <h4 className="mb-4">Products</h4>
          <div className="row row-cols-1 g-3">
            {products.map((product, index) => (
              <div key={index} className="col">
                <div className="card" style={{ height: "150px" }}>
                  <div className="row g-0 h-100">
                    <div
                      style={{ height: "100%", overflow: "hidden" }}
                      className="col-md-4"
                    >
                      <img
                        src={apiUrl + product?.image}
                        crossOrigin="anonymous"
                        className=" object-fit-cover"
                        alt={product?.productName}
                        style={{ height: "100%", overflow: "hidden" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product?.productName}</h5>
                        <p className="card-text">
                          <strong>Price:</strong>{" "}
                          {formatMoney(
                            (product?.price * (100 - product?.sale)) / 100
                          )}{" "}
                          VND
                          <br />
                          <strong>Quantity:</strong> {product.quantitySelected}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
