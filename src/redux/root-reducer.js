import {
    combineReducers
} from 'redux';

import UserReducer from './User/User-reducer';

import CartRedducer from './Cart/Cart-reducer'

export default combineReducers({
    user: UserReducer,
    cart: CartRedducer
})