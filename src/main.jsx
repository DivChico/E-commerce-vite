import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter.jsx";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
