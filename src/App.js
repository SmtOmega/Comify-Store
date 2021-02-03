import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components/index";
import "./App.css";
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  Home,
  ProductsPage,
  PrivateRoute,
  SingleProductPage,
  AuthWrapper,
} from "./pages/index";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <PrivateRoute exact path="/checkout">
            <CheckoutPage />
          </PrivateRoute>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/products">
            <ProductsPage />
          </Route>
          <Route
            exact
            path="/products/:id"
            children={<SingleProductPage />}
          ></Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
