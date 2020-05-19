import { combineReducers } from "redux";

import getDana from "./AdminReducer";
import donate from "./DonateReducer";
import musisi from "./RegisterReducer";
import loginState from "./LoginReducer";
import getDetail from "./DetailReducer";
import getDonasi from './HomeReducer';
import getCategory from './CategoryReducer'

const index = combineReducers({
  getDana,
  donate,
  musisi,
  loginState,
  getDetail,
  getDonasi,
  getCategory
});

export default index;
