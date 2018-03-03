import React, { Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMessage } from '../actions'
import { updateLastId } from '../actions'

class MessageSubmit extends Component{

  renderInputField(field){
    return(
      <div className="form-group">
        <input className="form-control input" type="text" placeholder="Type here" {...field.input} />
      </div>
    )

  }

  onSubmit(values){
    let id = this.props.lastId
    id = id+1
    const d = (new Date).getTime();
    const message_data = {"id":id, "author":"me", "timestamp":d,"content": values.message, "to":this.props.selectedUser}
    //on submit, add the new message to the state, increment the updateLastId and reset the form
    this.props.addMessage(message_data)
    this.props.updateLastId(id)
    this.props.reset()
  }

  render(){
    const { handleSubmit } = this.props;

  return(
    <div className="container-fluid chat-send-body">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="message" component={this.renderInputField}/>
          <div className="row-fluid text-right">
            <button type="submit" className="btn btn-sm btn-success"> Send</button>
          </div>
        </form>
    </div>
  )
}
}

function mapStateToProps(state){
  return {selectedUser:state.selectedUser,lastId:state.chat.lastId}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addMessage: addMessage,updateLastId:updateLastId},dispatch)
}

export default reduxForm({form:'InputForm'})(connect(mapStateToProps,mapDispatchToProps)(MessageSubmit));
