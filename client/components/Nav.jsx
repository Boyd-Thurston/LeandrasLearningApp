// import external modules
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// local imports
import { isAuthenticated } from '../utils/lib'
import { USER_LOG_OFF } from '../actions'

// define class component
export class Nav extends React.Component {
  
  // event handler for user log off
  handleLogOff = () => {
    this.props.dispatch({type: USER_LOG_OFF})
    this.props.history.push('/')
  }
  
  // render class component
  render(){
    return(
        <nav id="nav-bar">
          <div id="nav-bar-icon">
            <Link to="/">
              <img src="/android-chrome-192x192.png" alt="logo"/>
            </Link>
          </div>
          <div id="nav-bar-children-container">
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
          </div>
        </nav>
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
export default connect(mapStateToProps)(Nav)