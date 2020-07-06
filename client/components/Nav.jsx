import React from 'react'
import { Link } from 'react-router-dom'


function Nav ({children}) {
  return(
      <nav id="nav-bar">
        <div id="nav-bar-icon">
          <Link to="/">
            <img src="/android-chrome-192x192.png" alt="logo"/>
          </Link>
        </div>
        <div id="nav-bar-children-container">
          {children}
        </div>
      </nav>
  )
}

export default Nav