// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { getShuffledArray } from '../utils/lib'
import { changeCurrentGameRandomly, CLEAR } from '../actions'
import GameMemoryTile from './GameMemoryTile'

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
    
    if (this.state.firstSelectedTile && this.state.secondSelectedTile) return
    const {firstSelectedTile} = this.state
    const tile = this.state.tiles.find(tile => tile.id === id)
    tile.revealed = true

    // if the first tile is being flipped
    if (firstSelectedTile === null) {
      this.setState({
        firstSelectedTile: tile
      })
      return
    }

    // if the second tile is being flipped
    this.setState({
      secondSelectedTile: tile
    }, 
    // this.processPair
    )
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
            <div>
              {this.state.tiles.map(tile => <GameMemoryTile 
                key={tile.id}
                icon={tile.icon}
                revealed={tile.revealed}
                handleClick={() => this.handleClick(tile.id)}
              />)}
            </div>
          </> : 
          <p>Loading ...</p>
        }
      </div>
    )
  }
}

// export component
export default connect()(GameMemory)