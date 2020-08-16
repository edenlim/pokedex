import { combineReducers } from 'redux'

const currentMove = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_SEARCH_MOVE':
      return {
        ...state,
        [action.type]: 'lol'
      }
    default:
      return { ...state }
  }
}

export default combineReducers({
  currentMove
})
