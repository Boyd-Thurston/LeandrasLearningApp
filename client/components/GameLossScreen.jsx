// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { changeCurrentGameRandomly, CLEAR } from '../actions'

// define class component 
export class GameLossScreen extends React.Component {

  // changes to a new randomly selected game on event handler
  handleClick = () => {
    this.props.dispatch({type: CLEAR})
    this.props.dispatch(changeCurrentGameRandomly())
  }

  // renders the class component
  render(){
    return(
      <>
        <div className='container'>
          <button className='button' onClick={this.handleClick} >Next Game</button>
        </div>
      </>
    )
  }
}


// export component
export default connect()(GameLossScreen)