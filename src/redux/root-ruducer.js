 

import {
    combineReducers
} from 'redux';

import UserReducer from './User-reducer/User-reducer'

// user == key
export default combineReducers({
    user: UserReducer
})