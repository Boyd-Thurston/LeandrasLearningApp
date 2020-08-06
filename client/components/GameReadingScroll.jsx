// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { changeCurrentGameRandomly, CLEAR } from '../actions'

// define class component
class GameReadingScroll extends React.Component {
  // set inital state
  state = {
    displayed: 'text',
    title: 'loading....',
    text: 'loading....',
    question: {
      question: 'loading....',
      posibleAnswers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
      correctAnswer: 'Answer A'
    },
    selectedAnswer: '',
    message: '',
    attempts: 0
  }

  // reset to inital state
  reset = () => {
    this.setState({
      displayed: 'text',
      title: 'loading....',
      text: 'loading....',
      question: {
        question: 'loading....',
        posibleAnswers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
        correctAnswer: 'Answer A'
      },
      selectedAnswer: '',
      message: '',
      attempts: 0
    })
  }

  // move to question
  displayQuestion = () => {
    this.setState({displayed: 'question'})
  }

  // starts the next game
  getNewGame = () => {
    this.props.dispatch({type: CLEAR})
    this.props.dispatch(changeCurrentGameRandomly())
  }

  // onChange event handler
  handleChange = event => {
    this.setState({
      selectedOption: event.target.value
    })
  }

  // onSubmit event handler
  handleSubmit = event => {
    // prevent default behaviour
    event.preventDefault()

    // update attempt count
    this.setState({
      attempts: this.state.attempts + 1
    })

    // check answer
    this.validateAnswer() ? (
      this.setState({message: 'corret'}),
      // tidy up
      this.reset(),
      // next action
      this.getNewGame()
      // ToDo: send update to child statistics
    ): this.state.attempts >= 1 ? (
      this.setState({message: "Don't worry, you will do better next time. Lets try somthing else"}),
      // // tidy up
      this.reset(),
      // // next action
      this.getNewGame()
    ) : 
      this.setState({
        message: 'incorrect, please try again',
        selectedAnswer: ''
      })
  }

  // render the component
  render () {
    return (
      <div className='container'>
        {/* displayed reading text */}
        {this.state.displayed == 'text' && 
          <div>
            <h2 id='game-reading-scroll-title'>{`exert from ${this.state.title}`}</h2>
            <p id='game-reading-scroll-instructions'>
              <b>
                Read the exert below, once you have done click Finished Reading to move on to
                the question about this text.
              </b>
            </p>
            <p id='game-reading-scroll-text'>{this.state.text}</p>
            <button className='button' onClick={this.displayQuestion}>Finished Reading</button>
          </div>
        }

        {/* displayed question and posuble answers */}
        {this.state.displayed == 'question' && 
        <div>
          <p>{this.state.question.question}</p>
          <form onSubmit={this.handleSubmit}>
            {/* map posible answers to radio buttons */}
            {this.state.question.posibleAnswers.map((answer, index) => 
              <label>
                <input
                  type="radio"
                  value={answer}
                  checked={this.state.selectedOption === answer}
                  onChange={this.handleChange}
                />
                {answer}
              </label>
            )}
            <button className="button" type="submit">
              check your answer
            </button>
          </form>
        </div>
        }

      </div>
    )
  }
}

// export component
export default connect()(GameReadingScroll)