import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/products_reducer";
import { products_url as url } from "../utils/constants";
import axios from "axios";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../action";

const initialState = {
  isSideBarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  feature_products: [],
  singleProductLoading: false,
  singleProduct: {},
  singleProductError: false,
};
const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSideBar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios(url);
      const singleProduct = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);
  return (
    <ProductContext.Provider
      value={{ ...state, openSideBar, closeSideBar, fetchSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
