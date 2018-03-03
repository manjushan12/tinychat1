import React from 'react';

export default function searchBar(){
  return(
    <div className="row-fluid contact-body-search">
      <div className="form-group">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search"/>
          <span className="input-group-btn">
            <button className="btn btn-success" type="button"><i className="fa fa-search"></i></button>
          </span>
        </div>
      </div>
    </div>
  )
}
