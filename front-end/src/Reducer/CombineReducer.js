import { combineReducers } from "redux";

<<<<<<< HEAD
import getDana from "./AdminReducer";
import donate from "./DonateReducer";
import getDetail from "./DetailReducer";

const index = combineReducers({
  getDana,
  donate,
  getDetail,
});
=======
import getDana from './AdminReducer'
import donate from './DonateReducer'
import musisi from './RegisterReducer'
import loginState from './LoginReducer'

const index = combineReducers({
    getDana,
    donate,
    musisi,
    loginState,
})
>>>>>>> f241f2f5afc3a6f00bae8c819be7cb9679e2fa13

export default index;
