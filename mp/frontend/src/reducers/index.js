import { combineReducers } from 'redux';
import items from './items';
import auth from './auth';
import errors from './errors';

export default combineReducers({
    items,
    auth,
    errors
});