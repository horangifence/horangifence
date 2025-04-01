import React from "react";
import ReactDOM from "react-dom/client";
import App from "./NewApp.jsx"; // NewApp.jsx의 default export를 가져옵니다.
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
