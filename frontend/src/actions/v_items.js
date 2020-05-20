import axios from 'axios';
import { tokenConfig } from './auth';
import { GET_V_ITEMS, ACCEPT_ITEM, REJECT_ITEM, GET_MESSAGES, SET_LOADER } from './types';

export const getVItems = () => (dispatch, getState) => {
    dispatch({
        type: SET_LOADER
      });
axios.get('/api/v-items/', tokenConfig(getState))
    .then(res=>
        {
            dispatch({
                type: GET_V_ITEMS,
                payload: res.data
            });
            dispatch({
                type: SET_LOADER
              });
        })
    .catch(err => console.log(err))
}

export const acceptItem = (id) => (dispatch, getState) => {

const data = { verified: true, accepted: true}
dispatch({
    type: SET_LOADER
  });
axios.patch(`/api/v-items/${id}/`, data, tokenConfig(getState))
    .then(res=>
        {
            dispatch({
                type: ACCEPT_ITEM,
                payload: id
            });
            dispatch({
                type: GET_MESSAGES,
                payload: "ITEM ACCEPTED"
            });
            dispatch({
                type: SET_LOADER
              });
        })
    .catch(err => console.log(err))

}

export const rejectItem = (id) => (dispatch, getState) => {

const data = { verified: true, accepted: false}
dispatch({
    type: SET_LOADER
  });
axios.patch(`/api/v-items/${id}/`, data, tokenConfig(getState))
    .then(res=>
        {
            dispatch({
                type: REJECT_ITEM,
                payload: id
            });
            dispatch({
                type: GET_MESSAGES,
                payload: "ITEM REJECTED"
            });
            dispatch({
                type: SET_LOADER
              });
        })
    .catch(err => console.log(err))
}