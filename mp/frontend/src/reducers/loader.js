import { SET_LOADER } from '../actions/types'

const initialState = {
    showLoader: false
}

export default function(state = initialState, action){
    switch(action.type){

        case SET_LOADER:
            return{
                ...state,
                showLoader: !state.showLoader
            }

        default:
            return state
    }
}