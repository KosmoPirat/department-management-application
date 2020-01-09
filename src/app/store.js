import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers/index';

const middlewares = applyMiddleware(thunk, createLogger());

export default createStore(reducer, middlewares);
