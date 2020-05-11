import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import getDana from './Reducer/AdminReducer'

export default createStore(getDana, applyMiddleware(thunk, logger))