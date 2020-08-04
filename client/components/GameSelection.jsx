// import external modules
import React from 'react'
import { Link } from 'react-router-dom'

// local imports
import { gameList } from '../utils/lib'

// define functional component
function GameSelection () {
  return (
    <div className='container'>
      {gameList.map((listItem, index) => <Link to='#' key={index}><button className='button'>{listItem}</button></Link>)}
    </div>
  )
}

// export functional component
export default GameSelection