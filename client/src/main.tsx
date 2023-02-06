import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1020334812095-or4hr3q8qgq7skqohqfoelsn7aavlack.apps.googleusercontent.com">
      <CssBaseline />
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
