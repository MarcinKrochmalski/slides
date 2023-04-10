import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const widgetSlides = ReactDOM.createRoot(document.getElementById('widget-slides'));
const widgetSlides = document.getElementById("widget-slides");
ReactDOM.createRoot(widgetSlides).render(
  <React.StrictMode>
    <App slides={widgetSlides.dataset.slides} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
