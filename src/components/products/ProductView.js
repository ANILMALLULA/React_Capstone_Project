import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaInfo } from "react-icons/fa";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../actions/productsActions";

const ProductView = ({ e }) => {
  const auth = useSelector((state) => state.users);

  const history = useHistory();
  const dispatch = useDispatch();

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

  const viewDetailspopUp = (e) => {
    if (auth.loginSuccess) {
      history.push("details/" + e);
    } else {
      if (window.confirm("Please login to view the product")) {
        history.push("/login");
      }
    }
  };

  const updateDetailspopUp = (e) => {
    if (auth.loginSuccess) {
      history.push("update/" + e);
    } else {
      if (window.confirm("Please login to edit the product")) {
        history.push("/login");
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        margin: "10px",
        borderWidth: "1px",
        borderColor: "#8e7f7f",
        borderStyle: "solid",
        borderRadius: "10px",
        flexWrap: "wrap",
      }}
      key={e.id}
    >
      <div style={{ padding: "7px" }}>
        <h5>Product name:</h5>
        <p style={{ width: "200px", alignSelf: "center" }}>{e.productName}</p>
      </div>
      <div style={{ padding: "7px" }}>
        <h5>Manufacturer name:</h5>
        <p style={{ width: "200px", alignSelf: "center" }}>
          {e.productManufacturer}
        </p>
      </div>
      <div style={{ padding: "7px" }}>
        <h5>Product Price:</h5>
        <p style={{ width: "200px", alignSelf: "center" }}>{e.productPrice}</p>
      </div>
      <div style={{ padding: "7px" }}>
        <h5>Product Quantity:</h5>
        <p style={{ width: "200px", alignSelf: "center" }}>
          {e.productQuantity}
        </p>
      </div>
      <div style={{ padding: "7px" }}>
        <h5>No. of Views:</h5>
        <p style={{ width: "200px", alignSelf: "center" }}>{e.views}</p>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <FaInfo
          style={{
            textAlign: "center",
            fontSize: "25px",
            margin: "20px",
            color: "#007bff",
            cursor: "pointer",
          }}
          onClick={() => viewDetailspopUp(e.id)}
        />

        <FaEdit
          style={{
            textAlign: "center",
            fontSize: "25px",
            margin: "10px",
            color: "#007bff",
            cursor: "pointer",
          }}
          onClick={() => updateDetailspopUp(e.id)}
        />

        <FaTrash
          style={{
            textAlign: "center",
            fontSize: "25px",
            margin: "10px",
            color: "#e84545",
            cursor: "pointer",
          }}
          onClick={() => deleted(e)}
        />
      </div>
    </div>
  );
};

export default ProductView;
