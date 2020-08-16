// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { getShuffledArray } from '../utils/lib'
import { changeCurrentGameRandomly, CLEAR } from '../actions'

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
              <div>
                {this.state.tiles[0].revealed == true? 
                  <i className={this.state.tiles[0].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>
              <div>
                {this.state.tiles[1].revealed == true? 
                  <i className={this.state.tiles[1].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>              <div>
                {this.state.tiles[2].revealed == true? 
                  <i className={this.state.tiles[2].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>
              <div>
                {this.state.tiles[3].revealed == true? 
                  <i className={this.state.tiles[3].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>
            </div>
            <div>
              <div>
                {this.state.tiles[4].revealed == true? 
                  <i className={this.state.tiles[4].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>
              <div>
                {this.state.tiles[5].revealed == true? 
                  <i className={this.state.tiles[5].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>              
              <div>
                {this.state.tiles[6].revealed == true? 
                  <i className={this.state.tiles[6].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>
              <div>
                {this.state.tiles[7].revealed == true? 
                  <i className={this.state.tiles[7].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>
            </div>
            <div>
              <div>
                {this.state.tiles[4].revealed == true? 
                  <i className={this.state.tiles[4].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>
              <div>
                {this.state.tiles[5].revealed == true? 
                  <i className={this.state.tiles[5].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>              
              <div>
                {this.state.tiles[6].revealed == true? 
                  <i className={this.state.tiles[6].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>
              <div>
                {this.state.tiles[7].revealed == true? 
                  <i className={this.state.tiles[7].icon} ></i> : 
                  <img src="/android-chrome-192x192.png" alt="tile backing"/> 
                }
              </div>
            </div>
            <div>
            
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