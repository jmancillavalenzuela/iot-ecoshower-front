import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import esEs from "antd/es/locale/es_ES";
import { ConfigProvider } from "antd";
import "./less/main.less";
import Routes from "./routes/routes";
import { UserAuthContextProvider } from "./context/UserAuthContext";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={esEs}>
      <UserAuthContextProvider>
        <Routes />
      </UserAuthContextProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
