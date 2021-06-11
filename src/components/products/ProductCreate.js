import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addProduct } from "../actions/productsActions";
import { Formik, Form } from "formik";
import FormikController from "../formikFolder/FormikController";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { Prompt } from "react-router";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ProductCreate = () => {
  const [blur, setBlur] = useState(false);
  const history = useHistory();
  const auth = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const initialValues = {
    productName: "",
    productManufacturer: "",
    productQuantity: "",
    productPrice: "",
    productDescription: "",
    views: 0,
  };

  const OnSubmit = (e) => {
    dispatch(addProduct(e));
    setBlur(false);
    alert("Successfully added");
    history.push("list");
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required("Required"),
    productManufacturer: Yup.string().required("Required"),
    productPrice: Yup.number()
      .typeError("Must be a valid number")
      .positive("Price can't be negative")
      .required("Required"),
    productQuantity: Yup.number()
      .typeError("Must be a valid number")
      .positive("Quantity can't be negative")
      .required("Required"),
    productDescription: Yup.string().required("Required"),
  });

  return (
    <div>
      {auth.loginSuccess ? (
        <>
          <Prompt
            when={blur}
            message='All the Changes will be lost..Are you sure to leave?'
          />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={OnSubmit}
            enableReinitialize='true'
          >
            {(formik) => {
              return (
                <Form onBlur={() => setBlur(true)}>
                  <div>
                    <div style={{ padding: "20px" }}>
                      <h3
                        style={{
                          textAlign: "center",
                          margin: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Create New Product here..
                      </h3>
                      <hr
                        style={{
                          margin: "20px",
                        }}
                      ></hr>

                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "40px",
                            marginLeft: "14%",
                          }}
                        >
                          <FormikController
                            control='input'
                            type='text'
                            label='Product Name'
                            name='productName'
                          />
                          <FormikController
                            control='textarea'
                            type='text'
                            label='Product Description'
                            name='productDescription'
                          />
                          <FormikController
                            control='input'
                            type='text'
                            label='Product Manufacturer'
                            name='productManufacturer'
                          />
                          <FormikController
                            control='input'
                            type='text'
                            label='Product Price'
                            name='productPrice'
                          />
                          <FormikController
                            control='input'
                            type='text'
                            label='Product Quantity'
                            name='productQuantity'
                          />
                          <button
                            type='submit'
                            className='btn btn-dark'
                            style={{
                              backgroundColor: "#2b2e4a",
                              width: "200px",
                            }}
                            disabled={!formik.isValid}
                          >
                            ADD PRODUCT
                          </button>
                          <Link
                            to='/list'
                            className='btn btn-dark'
                            style={{
                              marginTop: "10px",
                              backgroundColor: "#9e9d89",
                              color: "black",
                              fontWeight: "500",
                              width: "200px",
                            }}
                          >
                            Back to Products List
                          </Link>
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </>
      ) : (
        <Redirect to='/login' />
      )}
    </div>
  );
};

export default ProductCreate;
