import React from 'React';
import ChatHead from './chat_head'
import UsersList from '../containers/users_list'

export default function sidebar(){
  return(
    <div className="sidebar col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <div className="row" >
      <ChatHead />
      <UsersList />
    </div>
    </div>
  )
}
