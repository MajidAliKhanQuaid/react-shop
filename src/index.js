import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ShopApp from "./ShopApp";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// used for performance measurement

if (process.env.REACT_APP_STAGING_ENV != "DEBUG") {
  if (!window.console) window.console = {};
  var methods = ["log", "debug", "warn", "info"];
  for (var i = 0; i < methods.length; i++) {
    console[methods[i]] = function () {};
  }
} else {
  console.log("************ YOU'RE IN DEBUG MODE ************");
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ShopApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
