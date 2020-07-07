// import external modules
import React from 'react'
import { Link } from 'react-router-dom'

// local imports

// define functional component 
function DashboardParent () {
  return (
    <div className="container">
      <Link to="/auth/rgister/child">
        <button className="button">Register a child</button>      
      </Link>
    </div>
  )
}

// export functional component
export default DashboardParent

