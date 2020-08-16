// import external modules
import React from 'react'


// define functional component 
function GameMemoryTile (props) {
  return(
    <div id={props.id} onClick={props.handleClcik}> 
      {props.revealed == true? 
        <i className={props.icon} ></i> : 
        <img src="/android-chrome-192x192.png" alt="tile backing"/> 
      }
    </div>
  )
}

// export component
export default GameMemoryTile