import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logoutUser } from "../actions/userActions";

function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutUser());
    // eslint-disable-next-line
  }, []);
  return <Redirect to='/' />;
}

export default Logout;
