import axios from "axios";

export const GET_DANA = 'GET_DANA'
export const GET_DANA_SUCCESS = 'GET_DANA_SUCCESS'
export const GET_DANA_FAILED = 'GET_DANA_FAILED'
export const PUT_DANA_EDIT = 'PUT_DANA_EDIT'


export function getDana() {
  return {
    type: GET_DANA,
  };
}

export function getDanaSuccess(result) {
  return {
    type: GET_DANA_SUCCESS,
    result,
  };
}

export function getDanaFailed(error) {
  return {
    type: GET_DANA_FAILED,
    error,
  };
}

export function getDataDana() {
  return function (dispatch) {
    dispatch(getDana());
        axios.get('https://musty-api.herokuapp.com/donasi')
        .then(result => dispatch(getDanaSuccess(result.data)))
        .catch(error => dispatch(getDanaFailed(error.massage)))
    }
}


export const putDataEdit = (data, id) =>{
    return (dispatch) => {
        axios
            .put('https://musty-api.herokuapp.com/donasi/status/'+ id, data)
            .then(() => dispatch(getDataDana()))
            .catch(error => dispatch(getDanaFailed(error.massage)))
    }
}

export const getDataCategory = (value) => {
  return (dispatch) => {
      axios
          .get('https://5eb8babcbb17460016b32a07.mockapi.io/data/tabs?filter=' + JSON.stringify(value))
          .then(response => {this.tabs = response.data})
          .catch(error => dispatch(getDanaFailed(error.massage)))
  }
}

// export const getDanaById = (id) => {
//   return function (dispatch) {
//     dispatch(getDana());
//     axios
//       .get(`https://5eb8babcbb17460016b32a07.mockapi.io/data/${id}`)
//       .then(() => dispatch(getDataDana()))
//       .catch((error) => dispatch(getDanaFailed(error.massage)));
//   };
// };
