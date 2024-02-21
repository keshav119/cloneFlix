import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./authContext/AuthContext";

const root = document.getElementById("root");

const startApp = () => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>
  );
};

startApp();
