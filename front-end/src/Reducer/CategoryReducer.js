import {
    GET_KONSER,
    GET_KONSER_SUCCESS,
    GET_KONSER_FAILED,
    GET_ALBUM,
    GET_ALBUM_SUCCESS,
    GET_ALBUM_FAILED,
    GET_ALATMUSIK,
    GET_ALATMUSIK_SUCCESS,
    GET_ALATMUSIK_FAILED
} from '../Action/CategoryAction'

const initialState = {
    konser: [],
    album: [],
    alatMusik: [],
    error: null,
}

const getCategory = (state = initialState, action) => {
    switch(action.type){
        case GET_KONSER:
            return{
                ...state,
            }
        case GET_KONSER_SUCCESS:
            return{
                ...state,
                konser: action.result,
            }
        case GET_KONSER_FAILED:
            return{
                ...state,
                error: action.error
            }
        case GET_ALBUM:
            return {
                ...state,
            }
        case GET_ALBUM_SUCCESS:
            return{
                ...state,
                album: action.result
            }
        case GET_ALBUM_FAILED:
            return{
                ...state,
                error:action.error
            }
        case GET_ALATMUSIK:
            return{
                ...state
            }
        case GET_ALATMUSIK_SUCCESS:
            return{
                ...state,
                alatMusik: action.result
            }
        case GET_ALATMUSIK_FAILED:
            return{
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default getCategory