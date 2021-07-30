import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { VechaiProvider } from "@vechaiui/react";

import "./index.css";
import App from "./components/App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

// declare Node.js properties of 'window' provided by Electron
declare global {
  interface Window {
    require: typeof require;
    process: typeof process;
  }
}

if (process.env.NODE_ENV === "development") {
  console.log("Running in development mode");
} else {
  console.log("Running in production mode");
}

ReactDOM.render(
  <React.StrictMode>
    <VechaiProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </VechaiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
