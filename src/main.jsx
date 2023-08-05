import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/storeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
