import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { VechaiProvider } from "@vechaiui/react";
import { ErrorPayload } from "vite/types/hmrPayload";

import "./index.css";
import App from "./components/App";
import store from "./redux/store";
import { relativePath } from "./utils/electronUtils";

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

// Setup runtime error overlay (based on https://github.com/vitejs/vite/issues/2076#issuecomment-846558772)
window.addEventListener("error", (errorEvent) => {
  const ErrorOverlay = customElements.get("vite-error-overlay");
  if (ErrorOverlay !== undefined) {
    const err: ErrorPayload["err"] = {
      message: errorEvent.message,
      stack:
        errorEvent.error instanceof Error &&
        errorEvent.error.stack !== undefined
          ? errorEvent.error.stack
          : "",
      loc: {
        file:
          relativePath(new URL(errorEvent.filename).pathname) ||
          errorEvent.filename,
        line: errorEvent.lineno,
        column: errorEvent.colno,
      },
    };
    document.body.appendChild(new ErrorOverlay(err));
  }
});

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
