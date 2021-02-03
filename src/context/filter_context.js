import React, { useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./product_context";
import reducer from "../reducer/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  CLEAR_FILTERS,
  SET_GRIDVIEW,
} from "../action";

const initialState = {
  filterProduct: [],
  allProducts: [],
  gridView: true,
  sort: "",
  filters: {
    text: '',
    color: 'all',
    category: 'all',
    company: 'all',
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false
  }
};
const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);


  useEffect(() => {
    dispatch({type:FILTER_PRODUCTS})
    dispatch({type: SORT_PRODUCTS})
  }, [products, state.sort, state.filters])
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e) => {
    const value = e.target.value
    dispatch({type: UPDATE_SORT, payload: value })
  }
  const updateFilter = (e) => {
    const name = e.target.name
    let value = e.target.value
    if(name === 'category'){
      value = e.target.textContent
    }
    if(name === 'color'){
      value = e.target.dataset.color
    }
    if(name === 'price'){
      value = Number(value)
    }
    if(name === 'shipping'){
      value = e.target.checked
    }
    dispatch({type: UPDATE_FILTERS, payload:{name, value}})
  }
  const clearFilter = () =>{
    dispatch({type: CLEAR_FILTERS})
  }
  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, updateSort, updateFilter, clearFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
