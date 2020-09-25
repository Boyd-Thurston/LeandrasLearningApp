// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { getRandomSelection } from '../utils/lib'

// define class component
class GameTrueOrFalse extends React.Component {
  // set inital state
  state = {
    question: '',
    answer: null,
    message: 'Loading ...',
  }

  // inital game set up
  componentDidMount() {
    const selectedFact = getRandomSelection(this.props.facts)
    this.setState({
      question: selectedFact.fact,
      answer: selectedFact.answer,
      message: 'in progress',
    })
  }

  // validate answer on event handler
  handleClick = (event) => {
    // convert name of target into boolian
    let selectedAnswer = ''
    event.target.name == 'true'? selectedAnswer = true: selectedAnswer = false

    // validate boolian selected answer against answer
    selectedAnswer == this.state.answer?
    (
      this.setState({
        question: '',
        answer: null,
        message: 'Correct'
      }),
      this.getNewGame('Win Screen')
    ):(
      this.setState({
        question: '',
        answer: null,
        message: 'Wrong'
      }),
      this.getNewGame('Loss Screen')
    )
  }

  // starts the next game
  getNewGame = (result) => {
    this.props.dispatch({type: CLEAR})
    this.props.dispatch({
      type: GAME_CHANGE_CURRENT,
      game: result
    })
  }

  // render class component
  render(){
    return(
      <div className='container'>
        {
          this.state.answer != null?
          <>
            <p>{`True or false, ${this.state.question}?`}</p>
            <button name='true' className='button' onClick={this.handleClick}>True</button>
            <button name='false' className='button' onClick={this.handleClick}>False</button>
          </>:
          <p>{this.state.message}</p>
        }
      </div>
    )
  }
}

// map global state to the local props
function mapStateToProps(globalState) {
  return {
    facts: globalState.facts
  }
}

// export class component
export default connect(mapStateToProps)(GameTrueOrFalse)