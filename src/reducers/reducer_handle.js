import * as types from '../constants/ActionTypes';

export default function(state= "", action){
  switch (action.type){
    case types.ADD_HANDLE:
      return action.payload
    default:
      return state
  }
}
