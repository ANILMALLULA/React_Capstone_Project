import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../formikFolder/FormikController";
import React, { useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { login, loginStateOnLoad } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ResultMessage from "../ResultMessage";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loginStateOnLoad());
    return () => {
      dispatch(loginStateOnLoad());
    };
    // eslint-disable-next-line
  }, []);

  const loginUser = (values) => {
    dispatch(login(values.email, values.password));
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  return auth.loginSuccess ? (
    <Redirect to='/' />
  ) : auth.loginLoading ? (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10%",
      }}
    >
      <Spinner animation='border' style={{ width: "50px", height: "50px" }} />
    </div>
  ) : (
    <div>
      <h3 style={{ textAlign: "center", margin: "50px 0" }}>LOGIN PAGE</h3>

      {auth.loginFailed ? (
        <ResultMessage
          color='danger'
          msg={
            auth.errors
              ? auth.errors.response && auth.errors.response.status === 404
                ? "User doesn't Exist!!"
                : auth.errors.message
              : "Something Wrong"
          }
        />
      ) : null}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={loginUser}
      >
        {(formik) => {
          return (
            <Form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "3% 0",
                }}
              >
                <FormikController
                  control='input'
                  type='email'
                  label='Email'
                  name='email'
                />

                <FormikController
                  control='input'
                  type='password'
                  label='Password'
                  name='password'
                />

                <button
                  type='submit'
                  disabled={!formik.isValid}
                  className='btn btn-dark my-2'
                  style={{ backgroundColor: "#2b2e4a", fontWeight: "bold" }}
                >
                  Login
                </button>
                <Link
                  to='/register'
                  style={{
                    fontWeight: "600",
                    marginTop: "15px",
                    fontSize: "14px",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Dont't have an account? Register here!{" "}
                  <FaUserPlus
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      marginLeft: "5px",
                      textDecoration: "none",
                      color: "black",
                    }}
                  />
                </Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
