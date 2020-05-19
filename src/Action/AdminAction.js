import axios from "axios";

export const GET_DANA = "GET_DANA";
export const GET_DANA_SUCCESS = "GET_DANA_SUCCESS";
export const GET_DANA_FAILED = "GET_DANA_FAILED";
export const PUT_DANA_EDIT = "PUT_DANA_EDIT";
const queryString = require("query-string");

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

export function putDanaEdit(data) {
  return {
    type: PUT_DANA_EDIT,
    data,
  };
}
export function getDataDana() {
  return function (dispatch) {
    dispatch(getDana());
    axios
      .get("https://musty-api.herokuapp.com/donasi")
      .then((result) => dispatch(getDanaSuccess(result.data)))
      .catch((error) => dispatch(getDanaFailed(error.massage)));
  };
}

export const putDataEdit = (data, id) => {
  console.log("tes masuk", data, id);
  return function (dispatch) {
    dispatch(getDana());
    const status = data.status;
    console.log("status", status);
    axios
      .put(
        `https://musty-api.herokuapp.com/donasi/status/${id}`,
        queryString.stringify({ status }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((result) => dispatch(getDataDana(result.data)))
      // .then((result) => console.log("res", result))
      .catch((error) => dispatch(getDanaFailed(error.massage)));
  };
};
