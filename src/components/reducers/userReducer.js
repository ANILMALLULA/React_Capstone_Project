import * as authActionTypes from "../actions/userTypes";
const initialState = {
  loginLoading: false,
  registerLoading: false,
  loginSuccess: localStorage.getItem("loggedIn") === "yes" ? true : false,
  registerSuccess: false,
  loginFailed: false,
  registerFailed: false,
  userDetails: localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : null,
  errors: null,
};



const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case authActionTypes.REGISTERED_STATE_ON_LOAD:
      return {
        ...state,
        registerSuccess: false,
        registerLoading: false,
        registerFailed: false,
        errors: null,
      };
    case authActionTypes.REGISTER_LOADING:
      return {
        ...state,
        registerLoading: true,
      };
    case authActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
        registerSuccess: true,
        registerFailed: false,
        errors: null,
      };
    case authActionTypes.REGISTER_FAIL:
      return {
        ...state,
        registerLoading: false,
        registerSuccess: false,
        registerFailed: true,
        errors: actions.payload.error,
      };
    case authActionTypes.LOGIN_STATE_ON_LOAD:
      return {
        ...state,
        errors: null,
        loginFailed: false,
      };
    case authActionTypes.LOGIN_lOADING:
      return {
        ...state,
        loginLoading: true,
        loginFailed: false,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        loginFailed: false,
        userDetails: actions.payload.userDetails,
        errors: null,
      };
    case authActionTypes.LOGIN_FAIL:
      return {
        ...state,
        loginFailed: true,
        loginLoading: false,
        loginSuccess: false,
        errors: actions.payload.error,
      };
    case authActionTypes.LOGOUT:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: false,
        userDetails: null,
      };
    default:
      return state;
  }
};

export default userReducer;
