import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GeneralContextProvider } from "./Context/Providers/GeneralContextProvider";

ReactDOM.render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>,
  document.getElementById("root")
);
