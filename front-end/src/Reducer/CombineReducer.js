import { combineReducers } from 'redux'

import getDana from './AdminReducer'
import donate from './DonateReducer'

const index = combineReducers({
    getDana,
    donate
})

export default index