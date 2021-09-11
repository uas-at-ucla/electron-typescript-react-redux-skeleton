import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { VechaiProvider } from "@vechaiui/react";

import "./index.css";
import App from "./components/App";
import store from "./redux/store";

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
