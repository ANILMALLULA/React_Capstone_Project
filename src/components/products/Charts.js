import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Charts = () => {
  const auth = useSelector((state) => state.users);
  return auth.loginSuccess ? <div>Charts</div> : <Redirect to='/login' />;
};

export default Charts;
