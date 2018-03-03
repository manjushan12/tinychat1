import * as types from '../constants/ActionTypes';

export default function(state = "", action){
  switch (action.type){
    case types.USER_SELECTED:
      return action.payload
    default:
      return state
  }
}
