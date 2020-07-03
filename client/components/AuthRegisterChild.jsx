// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { newUserLogIn } from '../actions'

// define class component
class AuthRegisterChild extends React.Component {

  // set inital state
  state = {
    registerParentId: '',
    registerUser: '',
    registerPassword: '',
    registerConfirmPassword: '',
  }

  // event handler for input events
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  // event handler for user registeration
  handleRegister = event => {
    event.preventDefault()
    // passwords match validation
    if(this.state.registerPassword === this.state.registerConfirmPassword){
      // POST register action call
      this.props.dispatch(newUserLogIn({
        username: this.state.registerUser,
        password: this.state.registerPassword,
        parent_id: this.state.registerParentId
      }))
      // reset state
      this.setState({
        registerParentId: '',
        registerUser: '',
        registerPassword: '',
        registerConfirmPassword: ''
      })
    } 
    else{
      // clear bad passwords
      this.setState({
        registerPassword: '',
        registerConfirmPassword: ''
      })
    }
  }

  // render the component
  render(){
    return(
      <form onSubmit={this.handleRegister}>
        <h2>Example Registration Form</h2>
        <label>username: </label>
        <input onChange={this.handleChange} name='registerUser' value={this.state.registerUser} type='text'/>
        <label>  password: </label>
        <input onChange={this.handleChange} name='registerPassword' value={this.state.registerPassword} type='password'/>
        <label>  confirm password: </label>
        <input onChange={this.handleChange} name='registerConfirmPassword' value={this.state.registerConfirmPassword} type='password'/>
        <input type='submit' value='Register'/>
        {/* passwords do not match error message */}
        {this.state.registerPassword.length > 1 && this.state.registerConfirmPassword.length > 1 && this.state.registerPassword != this.state.registerConfirmPassword && <p> passwords do not match!</p>}
      </form>
    )
  }
}

export default connect()(AuthRegisterChild)