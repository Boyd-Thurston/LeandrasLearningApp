// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import GameMathsAttack from './GameMathsAttack'

// define functional component 
function Game (props) {
  return(
    <>
      {props.game == 'Maths Attack' && <GameMathsAttack />}
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