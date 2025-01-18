import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginForm = (params) => {
  const { handleSubmit } = params;

  const validationSchema = Yup.object().shape({
    accountName: Yup.string().required("Please enter your account name"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Please enter your password"),
  });

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <Formik
        initialValues={{ accountName: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="email">Account Name:</label>
              <Field
                type="text"
                name="accountName"
                id="accountName"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="accountName"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="password">Password:</label>
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
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
