import {
    createStore,
    applyMiddleware
} from 'redux';

import RootReducer from './root-reducer'
import logger from 'redux-logger';

const middlware = [logger]

const store = createStore(RootReducer, applyMiddleware(...middlware))

export default store;