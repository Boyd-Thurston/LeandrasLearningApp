// import external modules
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// local imports
import { getShuffledArray } from '../utils/lib'
import { changeCurrentGameRandomly, CLEAR } from '../actions'

// define styled component styles
const Gameboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 30%;
  height: 100%;
` 
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
  color: ${props => props.color};
  font-size: 5.026rem;
  text-align: center;
  width:100%;
  height:100%;
`

// suporting data

// define class component
class GameMemory extends React.Component {
  // set initial state
  state = {
    tiles: [],
    firstSelectedTile: null,
    secondSelectedTile: null,
    pairsMatched: 0,
    clickingEnabled: true
  }

  // generate intial tiles
  componentDidMount(){
    // selcet random tiles
      // todo: create list constant and random seletor for multiple items from list
    const tempIconList = [
      {icon: "fas fa-spider", color: "purple"},
      {icon: "fas fa-spider", color: "purple"},
      {icon: "fas fa-cat", color: "gray" },
      {icon: "fas fa-cat", color: "gray" },
      {icon: "fas fa-truck-monster", color: "blue"},
      {icon: "fas fa-truck-monster", color: "blue"},
      {icon: "fas fa-bus-alt", color: "orange" },
      {icon: "fas fa-bus-alt", color: "orange" },
      {icon: "fas fa-snowman", color: "lightblue"},
      {icon: "fas fa-snowman", color: "lightblue"},
      {icon: "fas fa-apple-alt", color: "red"},
      {icon: "fas fa-apple-alt", color: "red"},
      {icon: "fas fa-robot", color: "green"},
      {icon: "fas fa-robot", color: "green"},
      {icon: "fas fa-book-dead", color: "black"},
      {icon: "fas fa-book-dead", color: "black"},
    ]
    const initalTiles = tempIconList.map((icon, index) => {
      return(
        {
          id: index,
          icon: icon.icon,
          color: icon.color,
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
    // checki fi clicking is enabled before proceding 
    if(this.state.clickingEnabled){
      // find tile selected in tiles array in state
      const selectedtile = this.state.tiles.find(tile => tile.id === id)
      // create a copy of state with update revealed property
      const updatedArray = this.state.tiles.map(tile => {
        if(tile.id === id){
          tile.revealed = true
        }
        return tile
      })
      // update state to reveal tile
      this.setState({
        tiles: updatedArray
      })
  
      // if the first tile is being flipped
      if (this.state.firstSelectedTile == null){
        this.setState({
          firstSelectedTile: selectedtile
        })
      }
      // if the second tile is being flipped
      else {
        this.setState({
          secondSelectedTile: selectedtile,
          clickingEnabled: false
        })
        setTimeout(() => this.processPair(), 600)
      }
    }

  }

  // validate answer
  processPair = () => {
    // check if tiles match
    if( this.state.firstSelectedTile.icon == this.state.secondSelectedTile.icon){
      // record pair was a match
      this.setState({
        firstSelectedTile: null,
        secondSelectedTile: null,
        pairsMatched: this.state.pairsMatched + 1,
        clickingEnabled: true
      })
      // check to see if game has been won
    }
    // reset tiles if not a match
    else {
      const updatedArray = this.state.tiles.map(tile => {
        if(tile.id === this.state.firstSelectedTile.id || tile.id === this.state.secondSelectedTile.id){
          tile.revealed = false
        }
        return tile
      })
      // update state to hide tiles and clear selected tiles
      this.setState({
        tiles: updatedArray,
        firstSelectedTile: null,
        secondSelectedTile: null,
        clickingEnabled: true
      })
    }
  }

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
              {this.state.tiles.map(tile => 
                <GameTile key={tile.id} id={tile.id} onClick={() => {this.handleClick(tile.id)}}>
                  {/*conditonal rendering based on if tile is revelaed or not*/}
                  {tile.revealed == true? 
                    <TileFront color={tile.color}><i className={tile.icon}></i></TileFront> : 
                    <TileBacking src="/android-chrome-192x192.png" alt="tile backing"/> 
                  }
                </GameTile>
              )}
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