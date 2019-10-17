import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import createRootReducers from "./reducers/Root.Reducers";

export default function configureStore() {
  const store = createStore;
  createRootReducers(), compose(applyMiddleware(logger));
  return store;
}
