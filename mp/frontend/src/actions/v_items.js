import axios from 'axios';
import { tokenConfig } from './auth';
import { GET_V_ITEMS, ACCEPT_ITEM, REJECT_ITEM } from './types';

export const getVItems = () => (dispatch, getState) => {
axios.get('/api/v-items/', tokenConfig(getState))
    .then(res=>
        {
            dispatch({
                type: GET_V_ITEMS,
                payload: res.data
            })
        })
    .catch(err => console.log(err))
}

export const acceptItem = (id) => (dispatch, getState) => {

}

export const rejectItem = (id) => (dispatch, getState) => {
    
}