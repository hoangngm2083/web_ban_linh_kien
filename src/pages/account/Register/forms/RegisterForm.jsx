import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignupForm = (params) => {
  const { handleSubmit } = params;

  const validationSchema = Yup.object().shape({
    accountName: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Please enter your account name"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Please enter your password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <Formik
        initialValues={{
          accountName: "",
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
              <label htmlFor="name">Account Name:</label>
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

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="confirmPassword">Confirm Password:</label>
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
              style={{
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              {"Sign Up"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
