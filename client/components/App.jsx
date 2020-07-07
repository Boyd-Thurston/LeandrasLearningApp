// import external modules
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// local imports
import { USER_LOG_OFF, saveUser } from '../actions'
import { isAuthenticated } from '../utils/lib'
import { getUserDetails } from '../apis'
import Nav from './Nav'
import AuthSignIn from './AuthSignIn'
import AuthRegister from './AuthRegister'

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
      <Router>
        <Route path="/">
          <Nav>
            {isAuthenticated()? 
            <>
              {/* log out functionality call/username display */}
              <p>Hello {this.props.user.username}</p>
              <button className="button" onClick={this.handleLogOff}>Log Off</button>
            </>
            : 
            <>
              <p>you are not signed in</p>
              <Link to="/auth/signin">
                <button className="button"> Sign In </button>
              </Link>
              <Link to="/auth/register">
                <button className="button"> Register </button>
              </Link>
            </>}
          </Nav>
        </Route>
        <Route exact path="/" component={Home}/>
        <Route path="/auth/signin" component={AuthSignIn}/>
        <Route path="/auth/register" component={AuthRegister}/>
      </Router>    
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