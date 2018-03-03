import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addHandle } from '../actions'

class SignIn extends Component{
  renderHandleField(field){
    return(
      <div className="form-group">
      <label>{field.label}</label>
      <input className="form-control" type="text" {...field.input} />
      <div className="text-danger">{field.meta.touched ? field.meta.error : ''}</div>
      </div>
    )

  }

  onSubmit(values){
    const handle = values.handle
    this.props.addHandle(handle)
    this.props.history.push(`/chatroom/${handle}`)
  }


  render(){
    const { handleSubmit } = this.props;
    return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Your Handle for the Chat" name="handle" component={this.renderHandleField}/>
        <button type="submit" className="btn btn-primary"> Enter Chat Room</button>
        </form>
    )
  }

}

function validate(values){
  const errors = {}
  if (!values.handle){
    errors.handle = "Enter a Handle for the Chat Room!"
  }
  return errors
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addHandle: addHandle},dispatch)
}

export default reduxForm({validate:validate, form:'SignInForm'})(connect(null,mapDispatchToProps)(SignIn));
