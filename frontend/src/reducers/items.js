import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, CLEAR_DATA } from '../actions/types.js';

const initialState = {
    items : []
}

export default function(state = initialState, action){

    switch(action.type)
    {
        case GET_ITEMS:
            return{
                ...state,
                items: action.payload
            }
        
        case ADD_ITEM:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }

        case DELETE_ITEM:
            return{
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }   

        case CLEAR_DATA:
            return{
                ...state,
                items: []
            }

        default:
            return state
            
    }

}