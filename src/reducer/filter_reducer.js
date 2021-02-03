import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  UPDATE_SORT,
  CLEAR_FILTERS,
  SET_GRIDVIEW,
  SORT_PRODUCTS,
} from "../action";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let max_price = action.payload.map((item) => item.price);
    max_price = Math.max(...max_price);
    return {
      ...state,
      allProducts: [...action.payload],
      filterProduct: [...action.payload],
      filters: { ...state.filters, maxPrice: max_price, price: max_price },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filterProduct } = state;
    let tempProduct = [...filterProduct];
    if (sort === "price-lowest") {
      tempProduct = tempProduct.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProduct = tempProduct.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProduct = tempProduct.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      tempProduct = tempProduct.sort((a, b) => b.name.localeCompare(a.name));
    }
    return { ...state, filterProduct: tempProduct };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const {allProducts} = state
    const {text, color, company, category, price, shipping } = state.filters

    let tempProduct = [...allProducts]

    if(text){
      tempProduct = tempProduct.filter(product => product.name.toLowerCase().startsWith(text))
    }

    if(company !== 'all'){
      tempProduct = tempProduct.filter(product => product.company === company)
    }
    if(category !== 'all'){
      tempProduct = tempProduct.filter(product => product.category === category)
    }

    if(color !== 'all'){
      tempProduct = tempProduct.filter(product => {
        return product.colors.find(c => c === color)
      })
    }
    if(shipping){
      tempProduct = tempProduct.filter(product => product.shipping === true)
    }
    tempProduct = tempProduct.filter(product => product.price <= price)
    return { ...state, filterProduct: tempProduct };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        color: "all",
        category: "all",
        company: "all",
        price: state.filters.maxPrice,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
