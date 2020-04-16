import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';
import { tokenConfig } from './auth';


// GET ITEMS

export const getItems = () => (dispatch, getState) =>{
axios.get('/api/items/', tokenConfig(getState))
    .then(res=>
        {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        })
    .catch(err => console.log(err))
}

// ADD ITEM

export const addItem = (item) => (dispatch, getState) =>{
    const token = getState().auth.token;


    const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      if (token) {
        config.headers['Authorization'] = `Token ${token}`;
      }
      console.log(token)

      const formData = new FormData();
      formData.append('item',item);
      console.log(formData)
axios.post('/api/items/', formData, config)
    .then(res=>
        {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })
    .catch(err => console.log(err))
}

// DELETE ITEM

export const deleteItem = (id) => (dispatch, getState) =>{
axios.delete(`/api/items/${id}/`, tokenConfig(getState))
    .then(res=>
        {
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        })
    .catch(err => console.log(err))
}