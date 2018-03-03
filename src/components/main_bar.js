import React from 'react';
import Profile from '../containers/profile';
import MessagesList from '../containers/messages_list'
import MessageSubmit from '../containers/message_submit'

export default function mainBar() {
  return(
    <div className="main-bar col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div className="row">
        <Profile />
        <MessagesList />
        <MessageSubmit/>
      </div>
     </div>
  )
}
