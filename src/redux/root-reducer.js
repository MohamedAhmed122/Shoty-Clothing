import {
    combineReducers
} from 'redux';

import {persistReducer} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import UserReducer from './User/User-reducer';
import CartReducer from './Cart/Cart-reducer'


const presistConfig ={
    key: 'root',
    storage,
    whiteList: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart :CartReducer
})

export default persistReducer(presistConfig,rootReducer)

// storage it brings the local storage in our browser