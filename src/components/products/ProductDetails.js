import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import { productViewed, getAllProducts } from "../actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const [product, setProduct] = useState(null);
  const auth = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    let productRef = products.find((prod) => prod.id === id);
    if (productRef) {
      setProduct(productRef);
    } else {
      dispatch(getAllProducts());
    }
    // eslint-disable-next-line
  }, [products, id]);

  useEffect(() => {
    if (auth.loginSuccess && product) dispatch(productViewed(product));
    // eslint-disable-next-line
  }, [product, auth.loginSuccess]);

  return auth.loginSuccess ? (
    product ? (
      <div>
        <h2
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Product Details
        </h2>
        <div style={{ width: "85%", margin: "auto" }}>
          <Card>
            <Card.Header>{product.productManufacturer}</Card.Header>
            <Card.Body>
              <Card.Title
                style={{
                  fontWeight: "bold",
                  margin: "10px 0",
                  fontSize: "22px",
                }}
              >
                {product.productName}
              </Card.Title>
              <Card.Text
                style={{
                  fontWeight: "400",
                  margin: "20px 0",
                  fontSize: "16px",
                }}
              >
                {product.productDescription}
              </Card.Text>
              <Card.Text
                style={{
                  fontWeight: "400",
                  margin: "10px 0",
                  fontSize: "16px",
                }}
              >
                Manufacturer:{" "}
                <span
                  style={{
                    fontWeight: "500",
                    margin: "10px 0",
                    fontSize: "20px",
                  }}
                >
                  {product.productManufacturer}
                </span>
              </Card.Text>
              <Card.Text
                style={{
                  fontWeight: "400",
                  margin: "10px 0",
                  fontSize: "16px",
                }}
              >
                Price:{" "}
                <span
                  style={{
                    fontWeight: "500",
                    margin: "10px 0",
                    fontSize: "20px",
                  }}
                >
                  {product.productPrice}
                </span>
              </Card.Text>

              <Card.Text
                style={{
                  fontWeight: "400",
                  margin: "10px 0",
                  fontSize: "14px",
                }}
              >
                Creation Date:{" "}
                <span
                  style={{
                    fontWeight: "500",
                    margin: "10px 0",
                    fontSize: "18px",
                  }}
                >
                  {product.creationDate}
                </span>
              </Card.Text>

              <Card.Text
                style={{
                  fontWeight: "400",
                  margin: "10px 0",
                  fontSize: "16px",
                }}
              >
                Quantity:{" "}
                <span
                  style={{
                    fontWeight: "500",
                    margin: "10px 0",
                    fontSize: "20px",
                  }}
                >
                  {product.productQuantity}
                </span>
              </Card.Text>

              <Card.Text
                style={{
                  fontWeight: "400",
                  margin: "10px 0",
                  fontSize: "16px",
                }}
              >
                Number of Views:{" "}
                <span
                  style={{
                    fontWeight: "500",
                    margin: "10px 0",
                    fontSize: "20px",
                  }}
                >
                  {product.views}
                </span>
              </Card.Text>
              <Link
                to='/list'
                className='btn btn-dark'
                style={{
                  marginTop: "20px",
                  color: "white",
                  marginLeft: "auto",
                }}
              >
                Back to Products List
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    ) : (
      <h1 className='text-center p-5'>Not Found</h1>
    )
  ) : (
    <Redirect to='/login' />
  );
}

export default ProductDetails;
