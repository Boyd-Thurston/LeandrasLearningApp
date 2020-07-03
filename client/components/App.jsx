// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { USER_LOG_OFF, saveUser } from '../actions'
import { isAuthenticated } from '../utils/lib'
import { getUserDetails } from '../apis'

// define class component 
export class App extends React.Component {

  // inital auth validation call
  componentDidMount(){
    isAuthenticated() && getUserDetails()
    .then(userDetails => {this.props.dispatch(saveUser(userDetails))})
  }
  
  // event handler for user log off
  handleLogOff = () => {
    this.props.dispatch({type: USER_LOG_OFF})
  }

  // render the App component
  render(){
    return(
      <>
        <h1>Development has begun</h1>
        <h2>Behold I am the App component</h2>
        {/* log out functionality call/username display */}
        <h2>Example of logged in user</h2>
        {this.props.user.hasOwnProperty('username')? <p>Hello {this.props.user.username}</p>: <p>you are not logged in</p>}
        <button onClick={this.handleLogOff}>Log Off</button>
      </>
    )
  }
}

// map global state to the local props
function mapStateToProps(globalState) {
  return {
    user: globalState.user
  }
}

// export component
export default connect(mapStateToProps)(App)