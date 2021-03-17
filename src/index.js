import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NasaApp } from "./app/nasa/NasaApp";
import ShopApp from "./app/shop/ShopApp";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NasaApp /> */}
    <Provider store={store}>
      <ShopApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
