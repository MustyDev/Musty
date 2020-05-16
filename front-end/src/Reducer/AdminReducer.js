import { GET_DANA, GET_DANA_SUCCESS, GET_DANA_FAILED} from '../Action/AdminAction'

const initialState = {
    dana: [],
    error: null,
}

const getDana = (state = initialState, action) => {
    switch (action.type){
        case GET_DANA:
            return{
                ...state,
            }
        case GET_DANA_SUCCESS:
            return{
                ...state,
                dana: action.result
            }
        case GET_DANA_FAILED:
            return{
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default getDana