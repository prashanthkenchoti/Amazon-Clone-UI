import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";
import AllRoutes from "./Components/Routes/AllRoutes.jsx";
import AuthProvider from "./Components/Context/AuthProvider.jsx";

const routes = AllRoutes();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* the tag <BrowserRouter> helps to route to child components. Browser Router itself is a component*/}
    <BrowserRouter>
      <AuthProvider children={<Routes>{routes}</Routes>}></AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
