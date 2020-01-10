import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Sagas from './sagas';
import Reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Sagas);

export default store;