import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import useCheckoutServices from "../../../services/checkout.services";

const ShippingForm = ({ totalPrice }) => {
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

  const { getShipingInfo, getPaymentUrl } = useCheckoutServices();
  const info = getShipingInfo();
  // Giá trị khởi tạo của form
  const initialValues = {
    ...info,
    paymentMethod: "VNPay", // Giá trị ban đầu cho paymentMethod
  };

  // Hàm xử lý khi submit form
  const onSubmit = () => {
    const url = getPaymentUrl({ amount: totalPrice });
    // console.log(url);

    window.location.href = url;
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <i className="bi bi-envelope"></i> Shipping Info
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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
                  placeholder="Email Address"
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
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ShippingForm;
