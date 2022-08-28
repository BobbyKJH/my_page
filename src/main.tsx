import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ResetStyle } from "./style/common/ResetStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
