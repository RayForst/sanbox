import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "./cashReducer";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "../saga";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  countReducer: countReducer,
  userReducer: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
