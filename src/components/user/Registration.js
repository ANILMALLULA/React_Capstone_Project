import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import FormikController from "../formikFolder/FormikController";
import * as Yup from "yup";
import { Link, Redirect } from "react-router-dom";
import ResultMessage from "../ResultMessage";
import { Spinner } from "react-bootstrap";
import { register, registeredStateOnLoad } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Registration = (props) => {
  const initialValues = {
    email: "",
    fname: "",
    lname: "",
    password: "",
    location: "",
  };
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(registeredStateOnLoad());
    return () => {
      dispatch(registeredStateOnLoad());
    };
    // eslint-disable-next-line
  }, []);

  const registerUser = (values) => {
    dispatch(register(values));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Required"),
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
  });

  return auth.loginSuccess ? (
    <Redirect to='/' />
  ) : (
    <>
      <h5 style={{ textAlign: "center", margin: "50px 0", fontWeight: "bold" }}>
        Please Register here
      </h5>

      {auth.registerSuccess ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ResultMessage
            msg='Great!! Registration Successfull. Please Login now.'
            color='success'
          />
          <Link
            to='/login'
            style={{
              color: "black",
              fontWeight: "700",
              marginLeft: "20px",
              fontSize: "13px",
              alignSelf: "center",
            }}
          >
            {" "}
            Click here to Login Page
          </Link>
        </div>
      ) : auth.registerLoading ? (
        <Spinner />
      ) : auth.registerFailed ? (
        <ResultMessage
          color='warning'
          msg={
            auth.errors
              ? auth.errors.response && auth.errors.response.status === 500
                ? "Your Email address is already Registered"
                : auth.errors.message
              : "Something went wrong"
          }
        />
      ) : null}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={registerUser}
      >
        {(formik) => {
          return (
            <Form>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "45px",
                  }}
                  onSubmit={(e) => {
                    register(e);
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
                    type='text'
                    label='First name'
                    name='fname'
                  />

                  <FormikController
                    control='input'
                    type='text'
                    label='Last Name'
                    name='lname'
                  />
                  <FormikController
                    control='input'
                    type='password'
                    label='Set Password'
                    name='password'
                  />

                  <FormikController
                    control='input'
                    type='text'
                    label='Location'
                    name='location'
                  />

                  <button
                    type='submit'
                    className='btn btn-dark'
                    style={{
                      width: "180px",
                      fontWeight: "bold",
                      marginTop: "10px",
                      padding: "8px",
                    }}
                    disabled={!formik.isValid}
                  >
                    Register
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Registration;
