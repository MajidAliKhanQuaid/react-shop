import "./main.css";
import { Provider, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { HomePage } from "./pages/home.page";
import { ProductsPage } from "./pages/products.page";
import { store } from "./redux/store";
import { Categories } from "./pages/categories.page";
import { Cart } from "./components/cart.component";
import { useEffect, useState } from "react";
import axios from "axios";

function ShopApp() {
  const products = useSelector((x) => x.cartState.products);
  console.log(products);
  const routes = [
    { id: 1, label: "Fresh", category: "fresh" },
    { id: 2, label: "Crockery", category: "crockery" },
    { id: 3, label: "Shoes", category: "shoes" },
    { id: 4, label: "Furniture", category: "furniture" },
  ];
  return (
    <Provider store={store}>
      <>
        <Cart />
        <h1 style={{ color: "white" }}>React Redux Example</h1>
        <Router>
          <Link to={`${preparePath()}`}>Home</Link>
          <Link to={`${preparePath("categories")}`}>Categories</Link>
          <Link to={`${preparePath("products")}`}>Products</Link>
          <Switch>
            <Route exact path={`${preparePath()}`} component={HomePage} />
            <Route
              exact
              path={`${preparePath("categories")}`}
              component={Categories}
            />
            <Route
              exact
              path={`${preparePath("products")}`}
              component={ProductsPage}
            />
            <Route path="*" component={() => <h1>Not Found !!</h1>} />
          </Switch>
        </Router>
      </>
    </Provider>
  );
}

function preparePath(originalRoute) {
  // e.g. originalRoute /categories
  // maps to PREFIX/categories i.e. majidalikhanquaid.github.io/react-shop/categories
  if (!originalRoute) originalRoute = "";
  return `/${
    process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL + "/" : ""
  }${originalRoute}`;
}

export default ShopApp;
