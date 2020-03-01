import {GET_ERORS} from "../actions/types";

const initialState = {};

export default function(state = initialState, action){
    switch(action.type){

        case GET_ERORS:
            return action.payLoad;

        default:
            return state;
    }
}