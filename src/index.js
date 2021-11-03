import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={
        <h1>Oops, caught an error while loading the page for you...</h1>
      }
      onError={(error, errorInfo) => console.log({ error, errorInfo })}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
