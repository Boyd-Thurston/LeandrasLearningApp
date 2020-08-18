// import external modules
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// local imports
import { getShuffledArray } from '../utils/lib'
import { changeCurrentGameRandomly, CLEAR } from '../actions'
import GameMemoryTile from './GameMemoryTile'

// define styled component styles
const Gameboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 30%;
  height: 100%;
` 

// define class component
class GameMemory extends React.Component {
  // set initial state
  state = {
    tiles: [],
    firstSelectedTile: null,
    secondSelectedTile: null
  }

  // generate intial tiles
  componentDidMount(){
    // selcet random tiles
      // todo: create list constant and random seletor for multiple items from list
    const tempIconList = [
      "fas fa-spider",
      "fas fa-spider",
      "fas fa-cat",
      "fas fa-cat",
      "fas fa-truck-monster",
      "fas fa-truck-monster",
      "fas fa-bus-alt",
      "fas fa-bus-alt",
      "fas fa-snowman",
      "fas fa-snowman",
      "fas fa-apple-alt",
      "fas fa-apple-alt",
      "fas fa-robot",
      "fas fa-robot",
      "fas fa-book-dead",
      "fas fa-book-dead",
    ]
    const initalTiles = tempIconList.map((icon, index) => {
      return(
        {
          id: index,
          icon: icon,
          revealed: false,
        }
      ) 
    })

    // shuffle tiles order
    const shuffledTiles = getShuffledArray(initalTiles)
    // set tiles to state
    this.setState({
      tiles: shuffledTiles
    })
  }

  // Click Event Handler
  handleClick (id) {
    // find tile selected in tiles array in state
    // const tile = this.state.tiles.find(tile => tile.id === id)
    const updatedArray = this.state.tiles.map(tile => {
      if(tile.id === id){
        tile.revealed = true
      }
      return tile
    })
    // tile.revealed = true
    console.log(updatedArray);
    // create a copy of state without
    // update state to reveal tile
    this.setState({
      tiles: updatedArray
    })

    // if the first tile is being flipped
    // if the second tile is being flipped
    // this.processPair
    // )
  }

  // validate answer

  // reset tiles

  // starts the next game
  getNewGame = () => {
    this.props.dispatch({type: CLEAR})
    this.props.dispatch(changeCurrentGameRandomly())
  }

  // render the component
  render(){
    return(
      <div>
        {this.state.tiles.length > 1? 
          <>
            <Gameboard>
              {this.state.tiles.map(tile => <GameMemoryTile 
                key={tile.id}
                icon={tile.icon}
                revealed={tile.revealed}
                colour="green"
                handleClick={() => this.handleClick(tile.id)}
              />)}
            </Gameboard>
          </> : 
          <p>Loading ...</p>
        }
      </div>
    )
  }
}

// export component
export default connect()(GameMemory)