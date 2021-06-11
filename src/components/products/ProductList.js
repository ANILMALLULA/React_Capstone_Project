import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ProductView from "./ProductView";
import {
  getAllProducts,
  deleteProductStateOnLoad,
} from "../actions/productsActions";
import ProductSearch from "./ProductSearch";
import TableView from "./TableView";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const [isCard, setIsCard] = useState(true);

  const setAsCards = () => {
    setIsCard(true);
  };
  const setAsTable = () => {
    setIsCard(false);
  };

  useEffect(() => {
    dispatch(getAllProducts());

    dispatch(deleteProductStateOnLoad());

    return () => {
      dispatch(deleteProductStateOnLoad());
    };

    // eslint-disable-next-line
  }, []);

  if (allProducts.getAllLoading) {
    return (
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
    );
  }

  return (
    <div>
      <div className='element.style'>
        <h3
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontWeight: "bold",
          }}
        >
          Product List
        </h3>
        <ProductSearch />
        <div style={{ textAlign: "center" }}>
          <button
            className='btn btn-light m-2'
            onClick={setAsCards}
            style={{
              fontWeight: "bold",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "black",
            }}
          >
            View As Cards
          </button>

          <button className='btn btn-dark m-2' onClick={setAsTable}>
            View As Table
          </button>
        </div>

        {!allProducts.getAllLoading && allProducts.products.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <h3>Sorry, No records to Display</h3>
          </div>
        ) : (
          <div
            style={{
              padding: "10px 30px",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              backgroundSize: "cover",
            }}
          >
            {isCard ? (
              <div style={{ width: "95%" }}>
                {allProducts.products.map((e) => (
                  <ProductView key={e.id} e={e} />
                ))}
              </div>
            ) : (
              <div style={{ width: "95%" }}>
                <TableView />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
