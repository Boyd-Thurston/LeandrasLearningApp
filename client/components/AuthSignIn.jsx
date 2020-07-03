// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { logIn } from '../actions'

// define class component 
export class AuthSignIn extends React.Component {

  // set inital state
  state = {
    signInUser: '',
    signInPassword: '',
  }

  // event handler for input events
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  // event handler for user sign in
  handleSignIn = event => {
    event.preventDefault()
    // POST log In action call
    this.props.dispatch(logIn({
      username: this.state.signInUser,
      password: this.state.signInPassword
    }))
    // reset state
    this.setState({
      signInUser: '',
      signInPassword: ''
    })
  }

  // render the App component
  render(){
    return(
      <form onSubmit={this.handleSignIn}>
        <h2>Example Sign In Form</h2>
        <label>username: </label>
        <input onChange={this.handleChange} name='signInUser' value={this.state.signInUser} type='text'/>
        <label>  password: </label>
        <input onChange={this.handleChange} name='signInPassword' value={this.state.signInPassword} type='password'/>
        <input type='submit' value='Sign in'/>
      </form>
    )
  }
}

// export component
export default connect()(AuthSignIn)