import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getAllProducts,
  updateProductStateOnLoad,
  updateProduct,
} from "../actions/productsActions";
import { Prompt } from "react-router";
import { Formik, Form } from "formik";
import FormikController from "../formikFolder/FormikController";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import ResultMessage from "../ResultMessage";

function ProductUpdate() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products);
  const [blur, setBlur] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const auth = useSelector((state) => state.users);
  const history = useHistory();

  const dummyVals = {
    id: "",
    productName: "",
    productManufacturer: "",
    productQuantity: "",
    productPrice: "",
    productDescription: "",
    views: "",
  };

  useEffect(() => {
    dispatch(updateProductStateOnLoad());
    return () => {
      dispatch(updateProductStateOnLoad());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let prod = productData.products.find((product) => product.id === id);
    if (prod) {
      setProduct(prod);
    } else {
      dispatch(getAllProducts());
    }
    // eslint-disable-next-line
  }, [productData.products, id]);

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

  const OnSubmit = (e) => {
    const confirmBox = window.confirm(
      "Do you really want to update this item?"
    );
    if (confirmBox === true) {
      console.log(e);
      dispatch(updateProduct(e));
      setBlur(false);
      alert("Successfully Updated");
      history.push("/list");
    }
  };

  return auth.loginSuccess ? (
    productData.updateLoading ? (
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
      <>
        {productData.errors ? (
          <ResultMessage color='danger' msg={productData.errors.message} />
        ) : null}
        {product ? (
          <>
            <Prompt
              when={blur}
              message='All the Changes will be lost..Are you sure to leave?'
            />
            <Formik
              initialValues={product || dummyVals}
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
                          Update the Products details here..
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
                            <div>
                              <Link
                                to='/list'
                                className='btn btn-dark'
                                style={{
                                  width: "200px",
                                  fontWeight: "bold",
                                }}
                              >
                                Back to Products List
                              </Link>
                              <button
                                type='submit'
                                className='btn btn-success'
                                style={{
                                  width: "200px",
                                  fontWeight: "bold",
                                  marginLeft: "20px",
                                }}
                                disabled={!formik.isValid}
                              >
                                Update Details
                              </button>
                            </div>
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
          <h3 className='text-center text-dark my-5'>Checking</h3>
        )}
      </>
    )
  ) : (
    <Redirect to='/login' />
  );
}

export default ProductUpdate;
