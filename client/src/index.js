import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "./context/modal/ModalContext";
import { GoalProvider } from "./context/goal/GoalContext";
import { AuthProvider } from "./context/auth/AuthContext";
import { CookiesProvider } from "react-cookie";
import "./assets/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <GoalProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </GoalProvider>
      </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>
);
