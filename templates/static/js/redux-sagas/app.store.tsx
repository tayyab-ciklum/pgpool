import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AppReducer from './app.reducer';
import appSagas from './app.saga';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const middleware = [];
middleware.push(sagaMiddleware);

const componseEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const AppStore = createStore(AppReducer, componseEnhancers(applyMiddleware(...middleware)));
function* rootSaga() {
    yield all([...appSagas]);
}
// saga middleware
sagaMiddleware.run(rootSaga);

export default AppStore;
