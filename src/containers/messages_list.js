import React, { Component } from 'react'
import { connect } from 'react-redux'
import Linkify from 'react-linkify'

class MessageList extends Component{

  formatDate(timestamp){
    var d = new Date(timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var time = d.getDate() + "/" + months[d.getMonth()] + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() +  ":" + d.getSeconds();
    return time;
  }

  //added an empty element at the end of the list and scrolled down to it when the component mounted
  scrollToBottom(){
    this.el.scrollIntoView();
  }

  componentDidUpdate() {
    if (this.el){
      this.scrollToBottom()
    }
  }

  //use Linkify to make the links clickable
  formatMessage(content){
   return (
     <Linkify>{content}</Linkify>
   )
 }

  renderMessages(){

      const user = this.props.selectedUser
      const chatMessages = this.props.chat.messages
      return chatMessages[user].map((msg) => {
        if (msg.author == "me"){
          return(
            <li key={msg.id} className="me-chat">
                <span className="chat-text">{this.formatMessage(msg.content)}</span>
                <span className="timestamp">{this.formatDate(msg.timestamp)}</span>
            </li>
          )
        }
        else{
        return(
        <li key={msg.id} className="you-chat">
            <span className="chat-text">{this.formatMessage(msg.content)}</span>
            <span className="timestamp">{this.formatDate(msg.timestamp)}</span>
        </li>
      )}

    })
  }


  render(){
    if (!this.props.selectedUser){
      return(
        <div className="container-fluid chat-body">Select an User from side bar to begin chatting...</div>
      )
    }
    return(
      <div>
      <ul className="container-fluid chat-body">
          {this.renderMessages()}
          <li ref={el => { this.el = el; }}></li>
      </ul>

      </div>
    )
  }
}

function mapStateToProps(state){
  return { chat:state.chat, selectedUser:state.selectedUser}
}

export default connect(mapStateToProps,null)(MessageList)
