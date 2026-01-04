import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ClimateProvider from "./context/ClimateContext";
import ThemeProvider from "./context/ThemeContext";
import "./index.css";

function Root() {
  return (
    <ThemeProvider>
      <ClimateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClimateProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
