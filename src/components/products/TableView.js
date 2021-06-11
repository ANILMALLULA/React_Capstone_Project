import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  productsFieldsChange,
} from "../actions/productsActions";
import { Table } from "react-bootstrap";
import DropdownElement from "./DropdownElement";

const TableView = () => {
  const [dropDownShow, setDropDownShow] = useState("");
  const auth = useSelector((state) => state.users);
  const showFields = useSelector((state) => state.products.productsFields);
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const updateDetailspopUp = (e) => {
    if (auth.loginSuccess) {
      history.push("update/" + e);
    } else {
      if (window.confirm("Please login to edit the product")) {
        history.push("/login");
      }
    }
  };

  const viewDetailspopUp = (e) => {
    if (auth.loginSuccess) {
      history.push("details/" + e);
    } else {
      if (window.confirm("Please login to view the product")) {
        history.push("/login");
      }
    }
  };

  const deleted = (prod) => {
    if (auth.loginSuccess) {
      if (window.confirm("Are you sure to delete the product?")) {
        dispatch(deleteProduct(prod));
        alert("Successfully Deleted");
      }
    } else {
      if (window.confirm("Please login to delete the product")) {
        history.push("/login");
      }
    }
  };

  const handleFieldChanges = (values) => {
    dispatch(productsFieldsChange(values));
    setDropDownShow("");
  };

  const handleDropDownShow = () => {
    setDropDownShow((prevState) => (prevState === "show" ? "" : "show"));
  };

  return (
    <div style={{ width: "95%" }}>
      <div style={{ marginLeft: "80%", marginBottom: "10px" }}>
        <DropdownElement
          handleDropDownShow={handleDropDownShow}
          handleFieldChanges={handleFieldChanges}
          showFields={showFields}
          dropDownShow={dropDownShow}
        />
      </div>
      <Table striped bordered hover responsive='sm'>
        <thead>
          <tr>
            {showFields.productName ? <th>Name</th> : null}
            {showFields.productManufacturer ? <th>Manufacturer</th> : null}
            {showFields.productQuantity ? <th>Quantity</th> : null}
            {showFields.productPrice ? <th>Price</th> : null}
            {showFields.views ? <th>No. of views</th> : null}
            {showFields.productDescription ? <th>Description</th> : null}
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.products.map((e) => (
            <tr key={e.id}>
              {showFields.productName ? <td>{e.productName}</td> : null}
              {showFields.productManufacturer ? (
                <td>{e.productManufacturer}</td>
              ) : null}
              {showFields.productQuantity ? <td>{e.productQuantity}</td> : null}
              {showFields.productPrice ? <td>{e.productPrice}</td> : null}
              {showFields.views ? <td>{e.views}</td> : null}
              {showFields.productDescription ? (
                <td>{e.productDescription}</td>
              ) : null}
              <td
                style={{
                  width: "100px",
                }}
              >
                <div
                  style={{
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "12px",
                      fontWeight: "bold",
                      width: "60px",
                      color: "white",
                    }}
                    className='btn bg-dark'
                    onClick={() => viewDetailspopUp(e.id)}
                  >
                    View
                  </p>

                  <p
                    style={{
                      fontSize: "12px",
                      width: "60px",
                      fontWeight: "bold",

                      color: "white",
                      textAlign: "center",
                    }}
                    className='btn bg-success'
                    onClick={() => updateDetailspopUp(e.id)}
                  >
                    Edit
                  </p>

                  <span onClick={() => deleted(e)}>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        width: "60px",
                        marginRight: "auto",
                        color: "white",
                      }}
                      className='btn bg-danger'
                    >
                      Delete
                    </p>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableView;
