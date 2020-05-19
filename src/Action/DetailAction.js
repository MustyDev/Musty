import axios from 'axios'

export const GET_DETAIL = 'GET_DETAIL'
export const GET_DETAIL_SUCCESS = 'GET_DETAIL_SUCCESS'
export const GET_DETAIL_FAILED = 'GET_DETAIL_FAILED'

export function getDetail() {
    return {
        type: GET_DETAIL
    }
}

export function getDetailSuccess(result) {
    return {
        type: GET_DETAIL_SUCCESS,
        result,
    }
}

export function getDetailFailed(error) {
    return {
        type: GET_DETAIL_FAILED,
        error,
    }
}

export function getDetailDonasi() {
    return function(dispatch){
        dispatch(getDetail());
        axios
            .get('https://musty-api.herokuapp.com/donasi')
            .then(result => dispatch(getDetailSuccess(result.data)))
            .catch(error => dispatch(getDetailFailed(error.massage)))
    }
}