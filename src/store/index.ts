import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';

import reducers from "./reducers";
import sagas from './sagas/auth';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools(),
));

sagaMiddleware.run(sagas);

export default store;