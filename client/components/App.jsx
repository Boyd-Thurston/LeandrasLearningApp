// import external modules
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// local imports
import { saveUser } from '../actions'
import { isAuthenticated } from '../utils/lib'
import { getUserDetails } from '../apis'
import Nav from './Nav'
import AuthSignIn from './AuthSignIn'
import AuthRegister from './AuthRegister'
import Home from './Home'
import AuthRegisterChild from './AuthRegisterChild'
import UnderConstruction from './UnderConstruction'
import Game from './Game'
import GameSelection from './GameSelection'

// define class component 
export class App extends React.Component {

  // inital auth validation call
  componentDidMount(){
    isAuthenticated() && getUserDetails()
    .then(userDetails => {this.props.dispatch(saveUser(userDetails))})
  }


  // render the App component
  render(){
    return(
      <Router>
        <Route path="/" component={Nav}/>
        <Route exact path="/" component={Home}/>
        <Route path="/auth/signin" component={AuthSignIn}/>
        <Route exact path="/auth/register" component={AuthRegister}/>
        <Route path="/auth/rgister/child" component={AuthRegisterChild}/>
        <Route path='/learning' component={Game}/>
        <Route path='/avatar' render={(props) => (<UnderConstruction name={'avatar'}/>)}/>
        <Route path='/play' component={GameSelection}/>
        <Route path='/progress' render={(props) => (<UnderConstruction name={'progress'}/>)}/>
        <Route path='/statistics:id' render={(props) => (<UnderConstruction name={'statistics'}/>)}/>
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