import axios from 'axios'

export const GET_DONASI = 'GET_DONASI'
export const GET_DONASI_SUCCESS = 'GET_DONASI_SUCCESS'
export const GET_DONASI_FAILED = 'GET_DONASI_FAILED'

export function getDonasi(){
    return {
        type: GET_DONASI
    }
}

export function getDonasiSuccess(result){
    return {
        type: GET_DONASI_SUCCESS,
        result
    }
}

export function getDonasiFailed(error){
    return {
        type: GET_DONASI_FAILED,
        error
    }
}

export function getDataDonasi(){
    return function(dispatch){
        dispatch(getDonasi())
        axios
        .get('https://musty-api.herokuapp.com/donasi')
        .then((result) => dispatch(getDonasiSuccess(result.data)))
        .catch(error => dispatch(getDonasiFailed(error.massage)))
    }
}