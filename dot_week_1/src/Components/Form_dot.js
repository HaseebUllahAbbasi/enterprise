import React from "react";
import { Formik } from "formik";

const Form_dot = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
              errors.password = "Required";
              
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (  
            <div className="col-md-4 offset-md-3 ">
                <form onSubmit={handleSubmit}>
              <input required
                type="email"
                className="form-control my-3"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input 
              required
              className="form-control my-3"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <div className="text-center my-3">
              <button type="submit" className="btn btn-info" disabled={isSubmitting}>
                Submit
              </button>
              </div>
            </form>
            </div>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
export default Form_dot;
