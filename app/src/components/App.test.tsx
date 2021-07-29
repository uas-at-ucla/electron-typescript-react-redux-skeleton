import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "redux/store";

test("renders welcome text", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const welcomeElement = screen.getByText(/Welcome!/i);
  expect(welcomeElement).toBeInTheDocument();
});
