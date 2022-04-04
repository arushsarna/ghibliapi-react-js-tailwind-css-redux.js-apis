import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import Page from "./components/Page";
import { store } from "./State/store";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Page />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
