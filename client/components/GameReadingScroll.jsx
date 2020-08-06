// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { getRandomSelection, getRandomNumber } from '../utils/lib'
import { changeCurrentGameRandomly, CLEAR } from '../actions'

// define class component
class GameReadingScroll extends React.Component {

  // starts the next game
  getNewGame = () => {
    this.props.dispatch({type: CLEAR})
    this.props.dispatch(changeCurrentGameRandomly())
  }

  // render the component
  render () {
    return (
      <div>

      </div>
    )
  }
}

// export component
export default connect()(GameReadingScroll)