import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createStore } from "@reduxjs/toolkit";

import rootSaga from "../sagas/rootSaga";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
