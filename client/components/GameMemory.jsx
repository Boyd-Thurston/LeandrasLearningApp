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
    const initalTiles = [
      {
        id: 1,
        icon: "fas fa-spider",
        revealed: false
      },
      {
        id: 1,
        icon: "fas fa-spider",
        revealed: false
      },
      {
        id: 2,
        icon: "fas fa-cat",
        revealed: false
      },
      {
        id: 2,
        icon: "fas fa-cat",
        revealed: false
      },
      {
        id: 3,
        icon: "fas fa-truck-monster",
        revealed: false
      },
      {
        id: 3,
        icon: "fas fa-truck-monster",
        revealed: false
      },
      {
        id: 4,
        icon: "fas fa-bus-alt",
        revealed: false
      },
      {
        id: 4,
        icon: "fas fa-bus-alt",
        revealed: false
      },
      {
        id: 5,
        icon: "fas fa-snowman",
        revealed: false
      },
      {
        id: 5,
        icon: "fas fa-snowman",
        revealed: false
      },
      {
        id: 6,
        icon: "fas fa-apple-alt",
        revealed: false
      },
      {
        id: 6,
        icon: "fas fa-apple-alt",
        revealed: false
      },
      {
        id: 7,
        icon: "fas fa-robot",
        revealed: false
      },
      {
        id: 7,
        icon: "fas fa-robot",
        revealed: false
      },
      {
        id: 8,
        icon: "fas fa-book-dead",
        revealed: false
      },
      {
        id: 8,
        icon: "fas fa-book-dead",
        revealed: false
      },
    ]
    // shuffle tiles order
    const shuffledTiles = getShuffledArray(initalTiles)
    // set tiles to state
    this.setState({
      tiles: {
        row1: [
          shuffledTiles[0],
          shuffledTiles[1],
          shuffledTiles[2],
          shuffledTiles[3]
        ],
        row2: [
          shuffledTiles[4],
          shuffledTiles[5],
          shuffledTiles[6],
          shuffledTiles[7]
        ],
        row3: [
          shuffledTiles[8],
          shuffledTiles[9],
          shuffledTiles[10],
          shuffledTiles[11]
        ],
        row4: [
          shuffledTiles[12],
          shuffledTiles[13],
          shuffledTiles[14],
          shuffledTiles[15]
        ]
      }
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