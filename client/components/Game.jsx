// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import GameMathsAttack from './GameMathsAttack'
import UnderConstruction from './UnderConstruction'
import GameReadingScroll from './GameReadingScroll'
import GameMemory from './GameMemory'
import GameTrueOrFalse from './GameTrueOrFalse'
import { GameWinScreen } from './GameWinScreen'

// define functional component 
function Game (props) {
  return(
    <>
      {props.game == 'Maths Attack' && <GameMathsAttack />}
      {props.game == 'Reading Scroll' && <GameReadingScroll />}
      {props.game == 'Memory' && <GameMemory />}
      {props.game == 'True or False' && <GameTrueOrFalse />}
      {props.game == 'Win Screen' && <GameWinScreen />}
    </>
  )
}

// map global state to local props
function mapStateToProps(globalState) {
  return {
    game: globalState.game
  }
}

// export functional compnent
export default connect(mapStateToProps)(Game)