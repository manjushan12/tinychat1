import React, { Component } from 'react'
import { connect } from 'react-redux'


class Profile extends Component{
  render(){
    return(
      <div className="chat-head">
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-3">
              <img className="img-circle img-avatar" src="/images/default.png"/>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-9 col-xs-9">
              <h5><b>{this.props.handle}</b><br/><span><i>Busy</i></span></h5>
          </div>
      </div>
    )
}

}
//the username entered by the user on the landing page is passed as a param
function mapStateToProps(state){
  return {handle:state.handle}
}



export default connect(mapStateToProps,null)(Profile)
