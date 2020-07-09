// import external modules
import React from 'react'
import { Link } from 'react-router-dom'

// local imports

// define functional component 
function DashboardChild () {
  return (
    <div>
      <div>
        <Link to='/learning'>
          <button className='button'><h2>Start learning</h2></button>
        </Link>
        <Link to='/avatar'>
          <button className='button'><h2>Decorate your avatar</h2></button>
        </Link>
      </div>
      <div>
        <button className='button'><h2>Play a game</h2></button>
        <button className='button'><h2>See how you are doing</h2></button>
      </div>
    </div>
  )
}

// export functional component
export default DashboardChild