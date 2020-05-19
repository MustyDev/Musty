import {
  GET_DETAIL,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILED,
} from "../Action/DetailAction";

const initialState = {
  detail: [],
  error: null,
};

const getDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
      };
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.result,
      };
    case GET_DETAIL_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getDetail;
