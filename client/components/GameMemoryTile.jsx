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
const TileFront = styled.div`
  border-radius: 20%;
  border-color: #F5F;
  border-style: solid;
  color: #${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)};
  font-size: 5.026rem;
  text-align: center;
  width:100%;
  height:100%;
`
// define functional component 
function GameMemoryTile (props) {
  
  return(
    <GameTile id={props.id} onClick={props.handleClick}> 
      {props.revealed == true? 
        <TileFront><i className={props.icon}></i></TileFront> : 
        <TileBacking src="/android-chrome-192x192.png" alt="tile backing"/> 
      }
    </GameTile>
  )
}

// export component
export default GameMemoryTile