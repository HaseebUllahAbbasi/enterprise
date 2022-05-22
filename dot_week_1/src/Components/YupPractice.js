import "./styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

export default function Yup() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
      password: Yup.string().required("Please enter password")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values))
      setIsLoggedIn(true);
    }
  });
  return (
    <div className="App">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null}
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <span className="error">{formik.errors.password}</span>
        ) : null}
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
      {isLoggedIn && <div className="heading">Yayyy! You are back!!!</div>}
    </div>
  );
}
