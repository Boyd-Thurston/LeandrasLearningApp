// import external modules
import React from 'react'
import { connect } from 'react-redux'
import Confetti from 'react-confetti'

// local imports
import { changeCurrentGameRandomly, CLEAR } from '../actions'

// define class component 
export class GameWinScreen extends React.Component {

  // changes to a new randomly selected game on event handler
  handleClick = () => {
    this.props.dispatch({type: CLEAR})
    this.props.dispatch(changeCurrentGameRandomly())
  }

  // renders the class component
  render(){
    const { width, height } = '100%'
    return(
      <>
        <Confetti width={width} height={height} />
        <div className='container'>
          <button className='button' onClick={this.handleClick} autoFocus>Next Game</button>
        </div>
      </>
    )
  }
}


// export component
export default connect()(GameWinScreen)