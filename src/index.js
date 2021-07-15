import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";

ReactDOM.render(
  <BrowserRouter>
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>,
  document.getElementById("root")
);
