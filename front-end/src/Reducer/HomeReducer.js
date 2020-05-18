import {
    GET_DONASI,
    GET_DONASI_SUCCESS,
    GET_DONASI_FAILED
} from '../Action/HomeAction'

const initialState = {
    data: [],
    error: null,
}

const getDonasi = (state = initialState, action) => {
    switch(action.type){
        case GET_DONASI:
            return{
                ...state,
            }
        case GET_DONASI_SUCCESS:
            return{
                ...state,
                data: action.result,
            }
        case GET_DONASI_FAILED:
            return{
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default getDonasi