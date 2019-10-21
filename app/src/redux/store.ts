import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import communicator from "communicator";

import exampleReducer from "./reducers/exampleReducer";

import * as exampleSelectors from "./selectors/exampleSelectors";

const { getStateWith, registerSelectors } = require("reselect-tools"); // Use require when no TypeScript support

// Reducer setup
const reducer = combineReducers({
  example: exampleReducer
});
export type AppState = ReturnType<typeof reducer>;

// Apply communicator middleware for sending and receiving data from server
const middleware = applyMiddleware(communicator);

// Create store
const store = createStore(reducer, composeWithDevTools(middleware));

// Reselect setup
export const selectors = {
  example: exampleSelectors
};
// Reselect Devtools setup:
registerSelectors({ ...exampleSelectors }); // register string names for selectors
getStateWith(() => store.getState()); // allows you to get selector inputs and outputs

export default store;
