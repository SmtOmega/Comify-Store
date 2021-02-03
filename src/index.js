import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/product_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/userContext";

//dev-8olokxnv.us.auth0.com
//R0zkBjMUoaqUpmZmaQRwH23ODNJNwSbq

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8olokxnv.us.auth0.com"
      clientId="R0zkBjMUoaqUpmZmaQRwH23ODNJNwSbq"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
