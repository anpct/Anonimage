import { combineReducers } from 'redux';
import items from './items';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import v_items from './v_items';
import all from './all';

export default combineReducers({
    items,
    auth,
    errors,
    messages,
    v_items,
    all
});