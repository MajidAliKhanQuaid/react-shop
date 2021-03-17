import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { About } from "./About";
import { Users } from "./Users";
import { Home } from "./Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Products } from "./products.page";
import { Product } from "./product.page";

function App() {
  useEffect(() => {
    // fetch(
    //   "https://api.nasa.gov/planetary/apod?api_key=VsU3nSqtrV2uHehGnf1jNNpXm7c9x2v6le9VvNNk"
    // )
    //   .then((data) => data.json())
    //   .then((data) => {
    //     console.log("Api Response from NASA ", data);
    //     setImageOfTheDay(data.url);
    //   });
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/products/:id" component={Product} />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*" component={() => <h1>404 !!</h1>} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
