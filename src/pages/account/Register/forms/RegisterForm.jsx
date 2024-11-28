import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignupForm = (params) => {
  const { handleSubmit } = params;

  // Xác thực bằng Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Tên phải có ít nhất 2 ký tự")
      .required("Vui lòng nhập tên"),
    email: Yup.string()
      .email("Địa chỉ email không hợp lệ")
      .required("Vui lòng nhập email"),
    password: Yup.string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .required("Vui lòng nhập mật khẩu"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
      .required("Vui lòng xác nhận mật khẩu"),
  });

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Đăng Ký</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="name">Họ và tên:</label>
              <Field
                type="text"
                name="name"
                id="name"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                id="email"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="password">Mật khẩu:</label>
              <Field
                type="password"
                name="password"
                id="password"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              {isSubmitting ? "Đang xử lý..." : "Đăng Ký"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
