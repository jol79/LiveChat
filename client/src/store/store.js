import { combineReducers } from 'redux';
import { isLogged, isAdmin, isOwner } from './user/reducer';

const generalReducer = combineReducers({
    logged: isLogged,
    admin: isAdmin,
    owner: isOwner
});

export default generalReducer;
