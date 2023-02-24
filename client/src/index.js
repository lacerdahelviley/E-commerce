import React from "react";
import ReactDOM from "react-dom";
import "components/styles/globalStyle.module.scss";
import  'components/styles/App.scss' ;
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
