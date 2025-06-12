import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Components
import Product from "./Product";
import Orders from "./components/Orders";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styles
import "./css/global.css";
import "./css/theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
