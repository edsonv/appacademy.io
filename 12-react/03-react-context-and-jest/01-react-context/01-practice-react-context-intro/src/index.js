import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HoroscopeContext } from "./context/HoroscopeContext";
import "./index.css";

const Root = () => {
  return (
    <HoroscopeContext.Provider value={{ sign: "Leo" }}>
      <App />
    </HoroscopeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
