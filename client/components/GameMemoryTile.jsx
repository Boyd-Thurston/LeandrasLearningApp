// import external modules
import React from 'react'
import styled from 'styled-components'

// define styled component styles
const GameTile = styled.div`
  flex: 1 0 20%;
  margin: 2.5%;
  ` 
const TileBacking =styled.img`
  border-radius: 20%;
  background-color: #F5F;
  width:100%;
  height:100%;
`

// define functional component 
function GameMemoryTile (props) {
  return(
    <GameTile id={props.id} onClick={props.handleClick}> 
      {props.revealed == true? 
        <i stlye='color:green' className={props.icon} ></i> : 
        <TileBacking src="/android-chrome-192x192.png" alt="tile backing"/> 
      }
    </GameTile>
  )
}

// export component
export default GameMemoryTile