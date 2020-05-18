import { combineReducers } from "redux";

import getDana from "./AdminReducer";
import donate from "./DonateReducer";
import musisi from "./RegisterReducer";
import loginState from "./LoginReducer";
import getDetail from "./DetailReducer";

const index = combineReducers({
  getDana,
  donate,
  musisi,
  loginState,
  getDetail,
});

export default index;
