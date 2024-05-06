import React from "react";
import { createRoot } from "react-dom/client"; // Correct import statement for createRoot
import App from "./App.jsx";

// Use createRoot() to render the root component into the DOM
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
