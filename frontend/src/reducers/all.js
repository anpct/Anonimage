import { GET_ALL_ITEMS, CLEAR_ALL_DATA } from '../actions/types';

const initialState = {
    items: []
}

export default function (state = initialState, action)
{
    switch(action.type){

        case GET_ALL_ITEMS:
            return{
                ...state,
                items: action.payload
            }

        case CLEAR_ALL_DATA:
            return{
                ...state,
                items: []
            }

        default:
            return state;
    }
} 