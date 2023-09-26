import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
console.log("RENDER")
root.render(
  // <React.StrictMode>
    <BrowserRouter  basename="/">
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);
  