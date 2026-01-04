import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PupProvider } from "./context/PupContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <PupProvider>
      <App />
    </PupProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
