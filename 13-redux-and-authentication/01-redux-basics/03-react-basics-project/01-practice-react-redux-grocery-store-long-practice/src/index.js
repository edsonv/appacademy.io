import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import configureStore from "./store";
import { addToCart } from "./store/cart";
import { populateProduce } from "./store/produce";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
  window.addToCart = addToCart;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
