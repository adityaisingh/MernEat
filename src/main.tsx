import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import Auth0ProviderWithNavigate from "./auth/Auth0providerwithNavigate";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithNavigate>
        <AppRouter />
      </Auth0ProviderWithNavigate>
    </Router>
  </React.StrictMode>
);
