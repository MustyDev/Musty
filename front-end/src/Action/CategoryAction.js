import axios from 'axios'

export const GET_KONSER = 'GET_KONSER'
export const GET_KONSER_SUCCESS = 'GET_KONSER_SUCCESS'
export const GET_KONSER_FAILED = 'GET_KONSER_FAILED'

export const GET_ALBUM = 'GET_ALBUM'
export const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS'
export const GET_ALBUM_FAILED = 'GET_ALBUM_FAILED'

export const GET_ALATMUSIK = "GET_ALATMUSIK"
export const GET_ALATMUSIK_SUCCESS = "GET_ALATMUSIK_SUCCESS"
export const GET_ALATMUSIK_FAILED = "GET_ALATMUSIK_FAILED"

export function getKonser(){
    return {
        type: GET_KONSER
    }
}

export function getKonserSuccess(result){
    return {
        type: GET_KONSER_SUCCESS,
        result
    }
}

export function getKonserFailed(error){
    return {
        type: GET_KONSER_FAILED,
        error
    }
}

export function getAlbum(){
    return {
        type: GET_ALBUM
    }
}

export function getAlbumSuccess(result){
    return {
        type: GET_ALBUM_SUCCESS,
        result
    }
}

export function getAlbumFailed(error){
    return {
        type: GET_ALBUM_FAILED,
        error
    }
}

export function getAlatMusik(){
    return {
        type: GET_ALATMUSIK
    }
}

export function getAlatMusikSuccess(result){
    return {
        type: GET_ALATMUSIK_SUCCESS,
        result
    }
}

export function getAlatMusikFailed(error){
    return {
        type: GET_ALATMUSIK_FAILED,
        error
    }
}

export function getDataKonser(){
    return function(dispatch){
        dispatch(getKonser())
        axios
        .get('https://musty-api.herokuapp.com/donasi/sort/1')
        .then(result => dispatch(getKonserSuccess(result.data)))
        .catch(error => dispatch(getKonserFailed(error.massage)))
    }
}

export function getDataAlbum(){
    return function(dispatch){
        dispatch(getAlbum())
        axios
        .get('https://musty-api.herokuapp.com/donasi/sort/2')
        .then(result => dispatch(getAlbumSuccess(result.data)))
        .catch(error => dispatch(getAlbumFailed(error.massage)))
    }
}

export function getDataAlatMusik(){
    return function(dispatch){
        dispatch(getAlatMusik())
        axios
        .get('https://musty-api.herokuapp.com/donasi/sort/3')
        .then(result => dispatch(getAlatMusikSuccess(result.data)))
        .catch(error => dispatch(getAlatMusikFailed(error.massage)))
    }
}