import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginForm = (params) => {
  const { handleSubmit } = params;
  // Xác thực form bằng Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Địa chỉ email không hợp lệ")
      .required("Vui lòng nhập email"),
    password: Yup.string()
      .min(6, "Mật khẩu phải ít nhất 6 ký tự")
      .required("Vui lòng nhập mật khẩu"),
  });

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Đăng Nhập</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
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

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              {isSubmitting ? "Đang xử lý..." : "Đăng Nhập"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
