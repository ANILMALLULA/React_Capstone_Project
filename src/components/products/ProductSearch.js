import React, { useRef, useEffect } from "react";
import { searchProducts } from "../actions/productsActions";
import { useDispatch } from "react-redux";

const ProductSearch = () => {
  const text = useRef("");
  const dispatch = useDispatch();

  const searching = (e) => {
    if (e !== "") {
      dispatch(searchProducts(e.target.value));
    }
  };

  useEffect(() => {
    text.current.focus();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", padding: "10px", marginTop: "15px" }}>
        <input
          type='search'
          placeholder='Search here...'
          style={{
            fontSize: "14px",
            marginBottom: "10px",
            borderRadius: "9px",
            border: "1px solid #ccc",
            padding: "7px",
            width: "75%",
          }}
          ref={text}
          onChange={searching}
        />
      </div>
    </div>
  );
};

export default ProductSearch;
