import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { isLogged as isLoggedSlice } from "../../../redux/slices/userSlice";
import publicRoutes from "../../../routes";
import useCheckoutServices from "../../../services/checkout.services";

const ShippingForm = ({ items, totalPrice }) => {
  const navigate = useNavigate();
  const { getShipingInfo, getPaymentUrl, setInvoice } = useCheckoutServices();
  const isLogged = useSelector(isLoggedSlice);

  const infos = getShipingInfo();

  // Giá trị khởi tạo của form

  const [addressIndex, setAddressIndex] = useState(0);

  let initialValues = {
    ...infos[addressIndex],
    paymentMethod: "VNPay", // Giá trị ban đầu cho paymentMethod
  };

  useEffect(() => {}, [addressIndex]);
  // Validation schema với Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    paymentMethod: Yup.string().required("Payment method is required"),
  });

  // Hàm xử lý khi submit form
  const onSubmit = ({ paymentMethod, ...rest }) => {
    if (!isLogged) {
      alert("You need to log in!");
      navigate(publicRoutes.login.path);
      return;
    }
    const invoice = {
      items,
      totalPrice,
      shippingInfor: rest,
      paymentMethod: paymentMethod == "VNPay" ? 1 : 0,
    };
    setInvoice(invoice);

    const url = getPaymentUrl({ amount: totalPrice });

    window.location.href = url;
  };

  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <i className="bi bi-envelope mx-2"></i> Shipping Info
        </div>
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              const selectedIndex = e.target.value; // Lấy giá trị được chọn
              console.log("Selected index:", selectedIndex);

              setAddressIndex(selectedIndex);
            }}
          >
            {infos?.map((value, index) => {
              return (
                <option key={index} value={index}>
                  Address {index + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          onSubmit(value);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Name Field */}
            <div className="card-body">
              <div className="row g-3">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="card-body">
              <div className="row g-3">
                <Field
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Phone Number"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="card-body">
              <div className="row g-3">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {/* Address Field */}
            <div className="card-body">
              <div className="row g-3">
                <Field
                  as="textarea"
                  id="address"
                  name="address"
                  rows="3"
                  className="form-control"
                  placeholder="Address"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-danger"
                />
              </div>
            </div>

            {/* Payment Method Field */}
            <div className="card-body">
              <label className="form-label">Payment Method</label>
              <div className="form-check">
                <Field
                  type="radio"
                  name="paymentMethod"
                  value="VNPay"
                  id="VNPay"
                  className="form-check-input"
                />
                <label htmlFor="VNPay" className="form-check-label">
                  VN Pay
                </label>
              </div>

              {/* <div className="form-check">
                <Field
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  id="cashOnDelivery"
                  className="form-check-input"
                />
                <label htmlFor="cashOnDelivery" className="form-check-label">
                  Cash on Delivery
                </label>
              </div> */}
              <ErrorMessage
                name="paymentMethod"
                component="div"
                className="text-danger"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Checkout
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ShippingForm;
