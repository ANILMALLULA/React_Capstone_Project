import * as productActionTypes from "../actions/productsActionTypes";

const initialState = {
  getAllLoading: false,
  addLoading: false,
  updateLoading: false,
  deleteLoading: false,
  addSuccess: false,
  updateSuccess: false,
  deleteSuccess: false,
  products: [],
  errors: null,
  productsFields: {
    productName: true,
    productManufacturer: true,
    productPrice: true,
    productQuantity: false,
    productDescription: false,
    creationDate: false,
    views: false,
  },
  searchStatus: false,
};

const productReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case productActionTypes.GET_ALL_PRODUCTS_LOADING:
      return {
        ...state,
        getAllLoading: true,
      };
    case productActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        getAllLoading: false,
        products: actions.payload.products,
        errors: null,
      };
    case productActionTypes.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        getAllLoading: false,
        errors: actions.payload.error,
      };

    case productActionTypes.SEARCH_PRODUCTS:
      return {
        ...state,
        searchStatus: true,
        products: actions.payload.data,
      };
    case productActionTypes.SET_LOADING:
      return {
        ...state,
        searchStatus: true,
      };

    case productActionTypes.ADD_PRODUCT_STATE_ON_LOAD:
      return {
        ...state,
        addLoading: false,
        addSuccess: false,
        errors: null,
      };

    case productActionTypes.ADD_PRODUCT_LOADING:
      return {
        ...state,
        addLoading: true,
      };
    case productActionTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addSuccess: true,
        products: [...state.products, actions.payload.product],
        errors: null,
      };
    case productActionTypes.ADD_PRODUCT_ERROR:
      return {
        ...state,
        addLoading: false,
        errors: actions.payload.error,
      };

    case productActionTypes.UPDATE_PRODUCT_STATE_ON_LOAD:
      return {
        ...state,
        errors: null,
        updateLoading: false,
        updateSuccess: false,
      };

    case productActionTypes.UPDATE_PRODUCT_LOADING:
      return {
        ...state,
        updateLoading: true,
      };
    case productActionTypes.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        updateSuccess: true,
        updateLoading: false,
        products: state.products.map((prod) =>
          prod.id === actions.payload.product.id
            ? actions.payload.product
            : prod
        ),
        errors: null,
      };
    case productActionTypes.UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        updateLoading: false,
        errors: actions.payload.error,
      };

    case productActionTypes.DELETE_PRODUCT_STATE_ON_LOAD:
      return {
        ...state,
        errors: null,
        deleteLoading: false,
        deleteSuccess: false,
      };

    case productActionTypes.DELETE_PRODUCT_LOADING:
      return {
        ...state,
        deleteLoading: true,
      };
    case productActionTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        deleteSuccess: true,
        deleteLoading: false,
        products: state.products.filter(
          (prod) => prod.id !== actions.payload.product.id
        ),
        errors: null,
      };
    case productActionTypes.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        deleteLoading: false,
        errors: actions.payload.error,
      };

    case productActionTypes.PRODUCTS_FIELDS_CHANGE:
      return {
        ...state,
        productsFields: actions.payload.values,
      };

    case productActionTypes.SET_PRODUCT_VIEWED:
      return {
        ...state,
        products: state.products.map((prod) =>
          prod.id === actions.product.id
            ? { ...prod, views: prod.views + 1 }
            : prod
        ),
        searchStatus: false,
      };

    default:
      return state;
  }
};

export default productReducer;
