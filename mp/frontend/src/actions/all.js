import { GET_ALL_ITEMS, SET_LOADER } from './types';
import { tokenConfig } from './auth';
import axios from 'axios';

export const getAllItems = () => (dispatch, getState) =>{

    dispatch({
        type: SET_LOADER
      });

axios.get('/api/all-items/', tokenConfig(getState))
    .then(res =>{
        dispatch({
            type: GET_ALL_ITEMS,
            payload: res.data
        })

        dispatch({
            type: SET_LOADER
          });
    })
    .catch(err => console.log(err))
}