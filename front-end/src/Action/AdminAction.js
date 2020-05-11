import axios from 'axios'

export const GET_DANA = 'GET_DANA'
export const GET_DANA_SUCCESS = 'GET_DANA_SUCCESS'
export const GET_DANA_FAILED = 'GET_DANA_FAILED'

export function getDana(){
    return {
        type: GET_DANA
    }
}

export function getDanaSuccess(result){
    return {
        type: GET_DANA_SUCCESS,
        result
    }
}

export function getDanaFailed(error){
    return {
        type: GET_DANA_FAILED,
        error
    }
}

export function getDataDana(){
    return function(dispatch){
        dispatch(getDana())

        axios.get('https://5eb8babcbb17460016b32a07.mockapi.io/data')
        .then(result => dispatch(getDanaSuccess(result.data)))
        .catch(error => dispatch(getDanaFailed(error.massage)))
    }
}