import { combineReducers } from 'redux'

const pokemon = (state={}, action) =>{
  switch(action.type){
    case 'NEW_SEARCH_POKEMON':
      return {
        ...action.data
      }
    default:
      return {...state}
  }
}

export default combineReducers({
  pokemon
})
