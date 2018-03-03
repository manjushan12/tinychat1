import _ from 'lodash';
import maxBy from 'lodash.maxby'
import * as types from '../constants/ActionTypes';

export default function(state = {}, action){
  switch (action.type){
    case types.FETCH_MESSAGES:
      const data = action.payload.data.messages
      const messages = _.mapKeys(data,'author')
      const users = _.keys(messages)
      const last = maxBy(data,'id')
      const lastId = last.id

      //Removing the user 'me'
      const index = users.indexOf("me");
      if (index !== -1) {
         users.splice(index, 1);
      }
      //use lod hash to change the key of each object to be the username
      var users_message = {};
      users.map((user) => {
          const from_res = _.filter(data, _.matches({ author: user }));
          const to_res = _.filter(data, _.matches({ to: user}));
          const res = from_res.concat(to_res)
          const sorted_res = _.sortByOrder(res, ['timestamp']);
          users_message[user] = sorted_res;
      })
      return {messages:users_message,users:users,lastId:lastId}
    case types.UPDATE_LAST_ID:
      return {...state,lastId:action.payload}
    case types.ADD_MESSAGE:
        const user = action.payload.to
        const old_message = state.messages
        const msg = old_message[user].concat(action.payload)
        old_message[user] = msg
        return {...state,messages:old_message}
    default:
      return state
  }
}
