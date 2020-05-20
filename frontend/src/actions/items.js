import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, GET_ERRORS, GET_MESSAGES, SET_LOADER } from './types';
import { tokenConfig } from './auth';


// GET ITEMS

export const getItems = () => (dispatch, getState) =>{
    dispatch({
        type: SET_LOADER
      });
axios.get('/api/items/', tokenConfig(getState))
    .then(res=>
        {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            });
            dispatch({
                type: SET_LOADER
              });
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
      dispatch({
        type: SET_LOADER
      });
axios.post('/api/items/', formData, config)
    .then(res=>
        {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            });

            dispatch({
                type: GET_MESSAGES,
                payload: "ITEM ADDED, PLEASE REFRESH IN SOMETIME FOR RESULTS"
            });
            dispatch({
                type: SET_LOADER
              });
        })
    .catch(err => {
        const errors = {
        msg: err.response.data,
        status: err.response.status
    }
    console.log(err.response.data)
    dispatch({
        type: GET_ERRORS,
        payload: errors
    });
    dispatch({
        type: SET_LOADER
      });
}
    )
}

// DELETE ITEM

export const deleteItem = (id) => (dispatch, getState) =>{

    dispatch({
        type: SET_LOADER
      });
axios.delete(`/api/items/${id}/`, tokenConfig(getState))
    .then(res=>
        {
            dispatch({
                type: DELETE_ITEM,
                payload: id
            });

            dispatch({
                type: GET_MESSAGES,
                payload: "ITEM DELETED"
            });

            dispatch({
                type: SET_LOADER
              });
        })
    .catch(err => console.log(err))
}