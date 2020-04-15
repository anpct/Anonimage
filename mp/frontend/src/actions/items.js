import axios from 'axios';
import { GET_ITEMS, ADD_ITEM } from './types';

// GET ITEMS

export const getItems = () => dispatch =>{
axios.get('/api/items/')
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

export const addItem = () => dispatch =>{
axios.post('/api/items/')
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

export const deleteItem = () => dispatch =>{
axios.delete(`/api/items/${id}`)
    .then(res=>
        {
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        })
    .catch(err => console.log(err))
}