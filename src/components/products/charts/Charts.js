import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../actions/productsActions";

const Charts = () => {
  const dispatch = useDispatch();
  const [isBar, setisBar] = useState(false);
  const auth = useSelector((state) => state.users);

  const setAsLine = () => {
    setisBar(false);
  };
  const setAsBar = () => {
    setisBar(true);
  };

  useEffect(() => {
    dispatch(getAllProducts());
    return () => {
      dispatch(getAllProducts());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {auth.loginSuccess ? (
        <div>
          <header className='Apheader text-center'>
            <h4>Charts based on No. of views</h4>
          </header>
          <div style={{ textAlign: "center" }}>
            <button
              className='btn btn-dark m-2'
              //onClick={setAsCards}
              style={{
                fontWeight: "bold",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "black",
              }}
              onClick={setAsLine}
            >
              View As Line Chart
            </button>

            <button
              className='btn btn-light m-2'
              style={{ fontWeight: "bold" }}
              onClick={setAsBar}
            >
              View As Bar Chart
            </button>
            <div>{isBar ? <BarChart /> : <LineChart />}</div>
          </div>
        </div>
      ) : (
        <Redirect to='/login' />
      )}
    </>
  );
};

export default Charts;
