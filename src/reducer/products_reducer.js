import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../action";

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSideBarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSideBarOpen: false };
    case GET_PRODUCTS_BEGIN:
      return { ...state, productsLoading: true };
    case GET_PRODUCTS_SUCCESS:
      const feature_products = action.payload.filter(
        (product) => product.featured === true
      );
      return {
        ...state,
        productsLoading: false,
        products: action.payload,
        feature_products,
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, productsError: true };
    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        singleProductLoading: true,
        singleProductError: false,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProductLoading: false,
        singleProduct: action.payload,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        singleProductLoading: false,
        singleProductError: true,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
