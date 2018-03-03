import React from 'react';

export default function chatHead(){
  return(
    <div className="chat-head">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <button className="btn btn-success"><i className="fa fa-plus-circle"></i> Add Friend</button>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
        <button className="btn btn-success"><i className="fa fa-bars"></i></button>
      </div>
    </div>
  )
}
