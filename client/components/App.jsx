// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { USER_LOG_OFF, logIn, saveUser, newUserLogIn } from '../actions'
import { isAuthenticated } from '../utils/lib'
import { getUserDetails } from '../apis'


// define class component 
export class App extends React.Component {

  // set inital state
  state = {
    signInUser: '',
    signInPassword: '',
    registerUser: '',
    registerPassword: '',
    registerConfirmPassword: '',
  }

  // inital auth validation call
  componentDidMount(){
    isAuthenticated() && getUserDetails()
    .then(userDetails => {this.props.dispatch(saveUser(userDetails))})
  }


  // event handler for input events
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  // event handler for user log off
  handleLogOff = () => {
    this.props.dispatch({type: USER_LOG_OFF})
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
      signInPassword: '',
      registerUser: '',
      registerPassword: '',
      registerConfirmPassword: ''
    })
  }

  // event handler for user registeration
  handleRegister = event => {
    event.preventDefault()
    // passwords match validation
    if(this.state.registerPassword === this.state.registerConfirmPassword){
      // POST register action call
      this.props.dispatch(newUserLogIn({
        username: this.state.registerUser,
        password: this.state.registerPassword
      }))
      // reset state
      this.setState({
        signInUser: '',
        signInPassword: '',
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

  // render the App component
  render(){
    return(
      <>
        <h1>Development has begun</h1>
        <h2>Behold I am the App component</h2>

        {/* sign in form */}
        <form onSubmit={this.handleSignIn}>
          <h2>Example Sign In Form</h2>
          <label>username: </label>
          <input onChange={this.handleChange} name='signInUser' value={this.state.signInUser} type='text'/>
          <label>  password: </label>
          <input onChange={this.handleChange} name='signInPassword' value={this.state.signInPassword} type='password'/>
          <input type='submit' value='Sign in'/>
        </form>

        {/* register form */}
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

        {/* log out functionality call/username display */}
        <h2>Example of logged in user</h2>
        {this.props.user.hasOwnProperty('username')? <p>Hello {this.props.user.username}</p>: <p>you are not logged in</p>}
        <button onClick={this.handleLogOff}>Log Off</button>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user
  }
}


export default connect(mapStateToProps)(App)