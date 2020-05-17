import { combineReducers } from "redux";

import getDana from "./AdminReducer";
import donate from "./DonateReducer";
import getDetail from "./DetailReducer";

const index = combineReducers({
  getDana,
  donate,
  getDetail,
});

export default index;
