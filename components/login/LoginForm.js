import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch } from "react-redux";
import { getData } from "../api/api"
import { Login } from "../redux/actions/loginAction"
/**
 * Login page
 * @returns //login component
 */

const LoginForm= () => {
  const [loginUser, setLoginUser] = useState(false);
  let dispatch = useDispatch();
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(fields) => {
        console.log(fields);
        try {
          //fetch logged in user and check if user exists
            getData(`users/?email=${fields.email}`).then((res) => {
            console.log(res.data);
            //dispatch logged in data
            dispatch(Login(res?.data));
            if (res.data.find((user) => user.email === fields.email)) {
              setLoginUser(false);
              //pushing to list of shares on success log in
              history.push("/sharesList");
            } else {
              setLoginUser(true);
            }
          });
        } catch (error) {
          console.log(error.message);
        }
      }}
      render={({ errors, touched }) => (
        <Form className="form">
          {loginUser && (
            <SweetAlert
              show={loginUser}
              title="New User,Please Sign Up!"
              onConfirm={() => setLoginUser(false)}
            ></SweetAlert>
          )}
          <div class="container">
            <div class="row">
              <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                  <div class="card-body">
                    <h5 class="card-title text-center">Sign In</h5>

                    <div class="form-label-group">
                      <label htmlFor="email">Email</label>
                      <Field data-testid="emailField"
                        name="email"
                        type="text"
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="email"
                        data-testid="emailError"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div class="form-label-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        name="password"
                        type="password"
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div class="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1">
                        Remember password
                      </label>
                    </div>
                    <button
                      class="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Sign in
                    </button>
                    <p className="my-1">
                      New user? <Link to="/registration">Register</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    />
  );
};
export default React.memo(LoginForm);
