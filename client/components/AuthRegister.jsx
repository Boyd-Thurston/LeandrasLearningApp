// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { newUserLogIn } from '../actions'

// define class component
class AuthRegister extends React.Component {

  // set inital state
  state = {
    registerEmail: '',
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
        email: this.state.registerEmail
      }))
      // reset state
      this.setState({
        registerEmail: '',
        registerUser: '',
        registerPassword: '',
        registerConfirmPassword: ''
      })
      this.props.history.push('/')
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
        <label>username: </label>
        <input onChange={this.handleChange} name='registerUser' value={this.state.registerUser} type='text'/>
        <label>password: </label>
        <input onChange={this.handleChange} name='registerPassword' value={this.state.registerPassword} type='password'/>
        <label>confirm password: </label>
        <input onChange={this.handleChange} name='registerConfirmPassword' value={this.state.registerConfirmPassword} type='password'/>
        <label>email: </label>
        <input onChange={this.handleChange} name='registerEmail' value={this.state.registerEmail} type='text'/>
        <input className="button" type='submit' value='Register'/>
        {/* passwords do not match error message */}
        {this.state.registerPassword.length > 1 && this.state.registerConfirmPassword.length > 1 && this.state.registerPassword != this.state.registerConfirmPassword && <p> passwords do not match!</p>}
      </form>
    )
  }
}

// export component
export default connect()(AuthRegister)