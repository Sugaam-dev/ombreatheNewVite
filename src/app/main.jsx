import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/slick/slick.css";
import "../styles/slick/slick-theme.css";

// Auto-recover from stale chunks across new deployments
window.addEventListener("vite:preloadError", () => {
  window.location.reload();
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);