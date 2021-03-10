import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import AppReducers from "./app-reducer";
import rootSaga from "./app-saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [];
middleware.push(sagaMiddleware);

const componseEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const AppStore = createStore(
  AppReducers,
  componseEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default AppStore;
