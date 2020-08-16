import { combineReducers } from 'redux'
import dex from './dex'
import move from './move'

const allReducers = combineReducers({
  dex,
  move
})

export default allReducers
