import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Product from "./Product";
import Orders from "./components/Orders";

import { HashRouter, Routes, Route } from "react-router-dom";

import "./css/global.css";
import "./css/theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
