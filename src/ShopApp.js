import "./main.css";
import { Provider, useDispatch, useSelector } from "react-redux";
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
import preparePath from "./PreparePath";
import axios from "./interceptor";

function ShopApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/cart`,
        JSON.stringify({ userid: 1 })
      )
      .then(({ data }) => {
        console.log("ShopApp ", data);
        dispatch({ type: "REFRESH_CART", payload: data.payload });
      })
      .catch((err) => {});
  }, []);
  const products = useSelector((x) => x.cartState.products);

  return (
    <Provider store={store}>
      <>
        <Cart products={products} />
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
              path={`${preparePath("products/:category?")}`}
              component={ProductsPage}
            />
            <Route path="*" component={() => <h1>Not Found !!</h1>} />
          </Switch>
        </Router>
      </>
    </Provider>
  );
}

export default ShopApp;
