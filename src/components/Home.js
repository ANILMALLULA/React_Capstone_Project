import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loginStateOnLoad } from "./actions/userActions";
import InvLogo from "../Large.png";

const Home = () => {
  const auth = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const filledLocal = JSON.parse(localStorage.getItem("user-info"));
  useEffect(() => {
    dispatch(loginStateOnLoad());
    return () => {
      dispatch(loginStateOnLoad());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {auth.loginSuccess ? (
        <h1 className='text-center my-3 py-4' style={{ color: "#176304" }}>
          Welcome, {filledLocal.fname}
        </h1>
      ) : (
        <div>
          <h3
            className='text-center my-4 py-3 px-5'
            style={{ color: "#903749" }}
          >
            Hello User..Heartly Welcome
          </h3>

          <h4 className='text-center py-3 px-5' style={{ color: "#2b2e4a" }}>
            {" "}
            Please login to your account and explore!{" "}
          </h4>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
          marginTop: "8%",
          width: "80",
          flexWrap: "wrap",
          marginBottom: "13%",
        }}
      >
        <img
          src={InvLogo}
          alt='Product Inventory Img..'
          style={{ width: "300px" }}
        />
        <div className='linee'></div>
        <div>
          <h2
            style={{
              marginTop: "7%",
              fontWeight: "bold",
              width: "300px",
            }}
          >
            {" "}
            Product inventory{" "}
          </h2>
          <p
            style={{
              marginTop: "7%",
              width: "300px",
              overflow: "auto",
            }}
          >
            Many producers partner with retailers to consign their inventory.
            Consignment inventory is the inventory owned by the
            supplier/producer (generally a wholesaler) but held by a customer
            (generally a retailer).
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
