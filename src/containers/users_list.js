import React, { Component} from 'react';
import SearchBar from '../components/search_bar'
import { fetchMessages } from '../actions';
import { selectUser } from '../actions';
import { selectUserChat } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class usersList extends Component{

  constructor(props){
    super(props)
    this.state = {active:null}
    this.userDidSelect = this.userDidSelect.bind(this)
    this.highlighColor = this.highlighColor.bind(this)
  }

  componentDidMount(){
    this.props.fetchMessages()
  }

// the selected user is maintained as the state of the component. If the user selects it, then the background
// color is changed
  userDidSelect(user){
    this.setState({active: user})
    this.props.selectUser(user)
  }

  highlighColor(user){
    if (this.state.active == user){
      return '#dcf8c6'
    }
    else {
      return '#FFF'
    }
  }


  renderList(){
    return this.props.chat.users.map((user) => { return(
        <li onClick={() => {
          this.userDidSelect(user)
        }
      } style={{background: this.highlighColor(user)}} key={user} className="user-name list-group-item">
          <a href="#"><h4 className="list-group-item-heading">{user}</h4></a>
        </li>



    )})
  }

  render(){

    if (!this.props.chat.users){
      return (<div className="container-fluid sidebar-group"><SearchBar/></div>)
    }

    return(
      <div className="container-fluid sidebar-group">
        <SearchBar/>
          <div className="row user-list-sidebar contact-body-list">
              <ul className="list-group user-group">
              {this.renderList()}
              </ul>
          </div>

        </div>
    )
  }
}

function mapStateToProps(state){
  return {chat:state.chat}
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchMessages: fetchMessages, selectUser: selectUser},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(usersList)
