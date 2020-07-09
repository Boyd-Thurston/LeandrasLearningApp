// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { isAuthenticated } from '../utils/lib'
import DashboardParent from './DashboardParent'
import DashboardChild from './DashboardChild'

// define functional component 
function Home (props) {
  return(
    <>
      {/* display landing page if not signed in */}
      {!isAuthenticated() && <p>I will be the landing page component</p>}
      {/* display parent dashboard if signed in as a parent user */}
      {isAuthenticated() && props.user.isChild == 0 && <DashboardParent/> }
      {/* display child dashboard if signed in as a child user */}
      {isAuthenticated() && props.user.isChild == 1 && <DashboardChild/> }
    </>
  )
}

// map global state to local props
function mapStateToProps(globalState) {
  return {
    user: globalState.user
  }
}

// export functional compnent
export default connect(mapStateToProps)(Home)
