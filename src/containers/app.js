import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../components/side_bar'
import MainBar from '../components/main_bar'
import { addHandle } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {

  render() {

    if (this.props.match.params.handle){
      const handle = this.props.match.params.handle
      this.props.addHandle(handle)
    }

    return (
      <div>
        <div className="text-xs-right  signout">
          <Link className="btn btn-primary" to="/">
            SignOut
          </Link>
        </div>
        <SideBar />
        <MainBar />
      </div>

    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({addHandle: addHandle},dispatch)
}

export default connect(null,mapDispatchToProps)(App)
