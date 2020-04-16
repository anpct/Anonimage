import { GET_V_ITEMS, ACCEPT_ITEM, REJECT_ITEM } from '../actions/types'

const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_V_ITEMS:
            return{
                ...state,
                items: action.payload
            }

        case ACCEPT_ITEM:
            return{
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }

        case REJECT_ITEM:
            return{
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }
        default:
            return state
    }
}