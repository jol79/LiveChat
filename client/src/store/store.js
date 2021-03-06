import { combineReducers } from 'redux';
import { isLogged, isAdmin, isOwner } from './user/reducer';
import { fetchMessages } from './messages/reducer';

const generalReducer = combineReducers({
    logged: isLogged,
    admin: isAdmin,
    owner: isOwner,
    chat: fetchMessages,
});

export default generalReducer;
