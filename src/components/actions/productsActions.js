import axios from "axios";
import * as productActionTypes from "./productsActionTypes";
import { v4 as uuidv4 } from "uuid";

const action = (type, payload = {}) => {
  return {
    type,
    payload,
  };
};

export const getAllProductsLoading = () =>
  action(productActionTypes.GET_ALL_PRODUCTS_LOADING);

export const getAllProductsSuccess = (products) =>
  action(productActionTypes.GET_ALL_PRODUCTS_SUCCESS, { products });

export const getAllProductsError = (error) =>
  action(productActionTypes.GET_ALL_PRODUCTS_ERROR, { error });

export const addProductLoading = () =>
  action(productActionTypes.ADD_PRODUCT_LOADING);

export const addProductSuccess = (product) =>
  action(productActionTypes.ADD_PRODUCT_SUCCESS, { product });

export const addProductError = (error) =>
  action(productActionTypes.ADD_PRODUCT_ERROR, { error });

export const updateProductLoading = () =>
  action(productActionTypes.UPDATE_PRODUCT_LOADING);

export const updateProductSuccess = (product) =>
  action(productActionTypes.UPDATE_PRODUCT_SUCCESS, { product });

export const updateProductError = (error) =>
  action(productActionTypes.UPDATE_PRODUCT_ERROR, { error });

export const deleteProductLoading = () =>
  action(productActionTypes.DELETE_PRODUCT_LOADING);

export const deleteProductSuccess = (product) =>
  action(productActionTypes.DELETE_PRODUCT_SUCCESS, { product });

export const deleteProductError = (error) =>
  action(productActionTypes.DELETE_PRODUCT_ERROR, { error });

export const productsFieldsChange = (values) =>
  action(productActionTypes.PRODUCTS_FIELDS_CHANGE, { values });

export const addProductStateOnLoad = () =>
  action(productActionTypes.ADD_PRODUCT_STATE_ON_LOAD);

export const updateProductStateOnLoad = () =>
  action(productActionTypes.UPDATE_PRODUCT_STATE_ON_LOAD);

export const deleteProductStateOnLoad = () =>
  action(productActionTypes.DELETE_PRODUCT_STATE_ON_LOAD);

export const setProductViewed = (product) =>
  action(productActionTypes.SET_PRODUCT_VIEWED, { product });

export const getProductLoading = () =>
  action(productActionTypes.GET_PRODUCT_LOADING);

export const getProductsSuccess = (id) =>
  action(productActionTypes.GET_PRODUCT_SUCCESS, { id });

export const getProductError = (error) =>
  action(productActionTypes.GET_PRODUCT_ERROR, { error });

export const setAllproducts = (data) =>
  action(productActionTypes.SEARCH_PRODUCTS, { data });

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch(getAllProductsLoading());
    axios
      .get("/products")
      .then((resp) => {
        dispatch(getAllProductsSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(getAllProductsError(err));
      });
  };
};

//

export const searchProducts = (text) => {
  return (dispatch) => {
    setLoading();
    axios
      .get(`/products?q=${text}`)
      .then((resp) => {
        dispatch(setAllproducts(resp.data));
      })
      .catch((err) => {
        dispatch(getAllProductsError(err));
      });
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch(addProductLoading());
    const id = uuidv4();
    let date = Date().toLocaleString();
    console.log(date);
    axios
      .post("/products", {
        ...product,
        id,
        views: 0,
        creationDate: date,
      })
      .then((resp) => {
        dispatch(addProductSuccess(resp));
      })
      .catch((err) => {
        dispatch(addProductError(err));
      });
  };
};

export const updateProduct = (product) => {
  return (dispatch) => {
    dispatch(updateProductLoading());
    axios
      .put("/products/" + product.id, product)
      .then((resp) => {
        dispatch(updateProductSuccess(resp));
      })
      .catch((err) => {
        dispatch(updateProductError(err));
      });
  };
};

export const deleteProduct = (product) => {
  return (dispatch) => {
    dispatch(deleteProductLoading());
    axios
      .delete("/products/" + product.id)
      .then((resp) => {
        dispatch(deleteProductSuccess(product));
      })
      .catch((err) => {
        dispatch(deleteProductError(err));
      });
  };
};

export const productViewed = (product) => {
  return (dispatch) => {
    setLoading();
    axios
      .put("/products/" + product.id, {
        ...product,
        views: product.views + 1,
      })
      .then((resp) => {
        dispatch(setProductViewed(product));
      })
      .catch((err) => {
        //nothing
      });
  };
};

//

//SET LOADING
export const setLoading = () => {
  return {
    type: productActionTypes.SET_LOADING,
  };
};
