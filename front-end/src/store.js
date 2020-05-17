import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import index from './Reducer/CombineReducer'

export default createStore(index, applyMiddleware(thunk, logger))