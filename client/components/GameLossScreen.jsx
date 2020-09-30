// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { changeCurrentGameRandomly, CLEAR } from '../actions'
import { getRandomSelection } from '../utils/lib'

// define class component 
export class GameLossScreen extends React.Component {
  // set inital state
  state = {
    message: ''
  }

  // choose intial message
  componentDidMount(){
    this.setState({
      message: getRandomSelection([
        'Sorry, better luck next time',
        'good atempt, lets try something else',
        'Not quite there yet, try another one',
        'Next time maybe, keep practicing'
      ])
    })
  }

  // changes to a new randomly selected game on event handler
  handleClick = () => {
    this.props.dispatch({type: CLEAR})
    this.props.dispatch(changeCurrentGameRandomly())
  }

  // renders the class component
  render(){
    return(
      <div className='container'>
        {this.state.message != '' && <p>{this.state.message}</p>}
        <button className='button' onClick={this.handleClick} autoFocus>Next Game</button>
      </div>
    )
  }
}


// export component
export default connect()(GameLossScreen)