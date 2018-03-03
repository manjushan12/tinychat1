import * as types from '../constants/ActionTypes';
import axios from 'axios';


export function addHandle(handle){
  return {type:types.ADD_HANDLE, payload:handle}
}

export function fetchMessages(){
  //initialize socket and listen to the socketIOClient
  // const socket = socketIOClient('http://localhost:6001');
   const request = axios.get('/fixtures/fakedata.json', {
      headers: { 'Content-Type': 'application/json' }
    })
    return {
      type: types.FETCH_MESSAGES,
      payload:request
    }

}

export function selectUser(user){
  return {type: types.USER_SELECTED, payload:user}
}

export function addMessage(message){
  return {type: types.ADD_MESSAGE, payload:message}
}

export function updateLastId(id){
  return {type: types.UPDATE_LAST_ID, payload:id}
}
