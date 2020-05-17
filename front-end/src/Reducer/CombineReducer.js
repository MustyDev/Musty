import { combineReducers } from 'redux'

import getDana from './AdminReducer'
import donate from './DonateReducer'
import musisi from './RegisterReducer'

const index = combineReducers({
    getDana,
    donate,
    musisi
})

export default index