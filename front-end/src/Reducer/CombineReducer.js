import { combineReducers } from 'redux'

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

export default index