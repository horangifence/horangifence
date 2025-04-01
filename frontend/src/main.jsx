import React from "react";
import ReactDOM from "react-dom/client";
import App from "./NewApp.jsx";  // default export로 가져오기
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
