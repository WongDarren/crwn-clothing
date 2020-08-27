import React from "react";
import ReactDOM from "react-dom";
// Need BrowerRouter component to wrap around our application
// That gives us all of the functionalities of routing in our App
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
