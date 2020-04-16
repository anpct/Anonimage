import { GET_ALL_ITEMS } from './types';
import { tokenConfig } from './auth';
import axios from 'axios';

export const getAllItems = () => (dispatch, getState) =>{

axios.get('/api/all-items/', tokenConfig(getState))
    .then(res =>{
        dispatch({
            type: GET_ALL_ITEMS,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}