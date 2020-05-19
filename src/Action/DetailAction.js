import axios from "axios";

export const GET_DETAIL = "GET_DETAIL";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILED = "GET_DETAIL_FAILED";
export const PUT_DONASI = "PUT_DONASI";
const queryString = require("query-string");

export function getDetail() {
  return {
    type: GET_DETAIL,
  };
}

export function getDetailSuccess(result) {
  return {
    type: GET_DETAIL_SUCCESS,
    result,
  };
}

export function getDetailFailed(error) {
  return {
    type: GET_DETAIL_FAILED,
    error,
  };
}

export function putDonasi(data) {
  return {
    type: PUT_DONASI,
    data,
  };
}

export function getDetailDonasi(id) {
  console.log("id-detail", id);

  return function (dispatch) {
    dispatch(getDetail());
    axios
      .get(`https://musty-api.herokuapp.com/donasi/${id}`)
      .then((result) => dispatch(getDetailSuccess(result.data)))
      .catch((error) => dispatch(getDetailFailed(error.massage)));
  };
}

export const putDonasiJumlah = (data, id) => {
  return function (dispatch) {
    dispatch(getDetail());
    const jumlah = data.jumlah;
    axios
      .put(
        `https://musty-api.herokuapp.com/donasi/jumlah/${id}`,
        queryString.stringify({ jumlah }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((result) => dispatch(getDetailDonasi(result.data)))
      .catch((error) => dispatch(getDetailFailed(error.massage)));
  };
};
