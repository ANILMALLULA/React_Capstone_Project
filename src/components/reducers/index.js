import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import ProductsReducer from "./productsReducer";

export default combineReducers({
  users: UserReducer,
  products: ProductsReducer,
});
