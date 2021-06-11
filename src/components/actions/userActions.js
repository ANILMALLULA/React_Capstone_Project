import axios from "axios";
import * as authActionTypes from "./userTypes";

const action = (type, payload = {}) => {
  return {
    type,
    payload,
  };
};

export const registeredStateOnLoad = () =>
  action(authActionTypes.REGISTERED_STATE_ON_LOAD);

export const registerLoading = () => action(authActionTypes.REGISTER_LOADING);

export const registerSuccess = () => action(authActionTypes.REGISTER_SUCCESS);

export const registerFail = (error) =>
  action(authActionTypes.REGISTER_FAIL, { error });

export const loginStateOnLoad = () =>
  action(authActionTypes.LOGIN_STATE_ON_LOAD);

export const loginLoading = () => action(authActionTypes.LOGIN_lOADING);

export const loginSuccess = (userDetails) =>
  action(authActionTypes.LOGIN_SUCCESS, { userDetails });

export const loginFail = (error) =>
  action(authActionTypes.LOGIN_FAIL, { error });

export const logout = () => action(authActionTypes.LOGOUT);

export const register = (userDetails) => {
  return (dispatch) => {
    dispatch(registerLoading());
    userDetails.id = userDetails.email;
    axios
      .post("/users", userDetails)
      .then((resp) => {
        dispatch(registerSuccess());
      })
      .catch((err) => {
        dispatch(registerFail(err));
      });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginLoading());
    axios
      .get("/users/" + email)
      .then((resp) => {
        if (resp.data.email === email && resp.data.password === password) {
          let x = resp.data;
          localStorage.setItem("loggedIn", "yes");
          localStorage.setItem(
            "user-info",
            JSON.stringify({ ...x, password: "" })
          );
          dispatch(loginSuccess(resp.data));
        } else if (resp.data.password !== password) {
          dispatch(loginFail(Error("Please enter correct password")));
        }
      })
      .catch((err) => {
        dispatch(loginFail(err));
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userDetails");
    dispatch(logout());
  };
};
