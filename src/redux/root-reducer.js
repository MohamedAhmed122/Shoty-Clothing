import {
    combineReducers
} from 'redux';

import UserReducer from './User/User-reducer';

export default combineReducers({
    user: UserReducer,
})