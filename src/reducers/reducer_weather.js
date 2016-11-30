import { FETCH_WEATHER } from '../actions/index.js'

export default function(state=[], action){
    switch (action.type){
        case FETCH_WEATHER:
        //return state.concat([action.payload.data]);// concat returns a new array, remember not to change state.
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
}