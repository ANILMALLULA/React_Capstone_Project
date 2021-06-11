import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className='text-center'>
      <h1 className='text-center' style={{ marginTop: "7%" }}>
        Not Found
      </h1>
      <button
        className='btn btn-success'
        style={{ margin: "20px" }}
        onClick={() => history.push("")}
      >
        {" "}
        Click here to view the website
      </button>
    </div>
  );
};

export default NotFound;
