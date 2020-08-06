// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { getRandomSelection, getRandomNumber } from '../utils/lib'
import { changeCurrentGameRandomly, CLEAR } from '../actions'

// define class component
class GameMathsAttack extends React.Component {

  // set initial state
  state = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
    answer: '',
    message: '',
    attempts: 0
  }

  // call to generate inital question
  componentDidMount(){
    this.getMathsQuestion()
  }

  // generate random variables and set state to values
  getMathsQuestion = () => {
    this.setState({
      operator: getRandomSelection(['+', '-', 'x', '÷']),
      answer: '',
      message: '',
      attempts: 0
    })
    const number = getRandomNumber(1, 10)
    const answer = getRandomNumber(1, 10)
    switch (this.state.operator) {
      case '+':
      case 'x':
        this.setState({      
          firstNumber: getRandomNumber(1, 10),
          secondNumber: getRandomNumber(1, 10),
        })
        break
      case '-':
        this.setState({
          firstNumber: getRandomNumber(1, 10) + number,
          secondNumber: number,
        })
        break
      case '÷':
        this.setState({
          firstNumber: answer * number,
          secondNumber: number,
        })
        break
    }
  }

  // starts the next game
  getNewGame = () => {
    this.props.dispatch({type: CLEAR})
    this.props.dispatch(changeCurrentGameRandomly())
  }

  // submit event handler
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
      this.getMathsQuestion(),
      // next action
      this.getNewGame()
      // ToDo: send update to child statistics
    ): this.state.attempts >= 2 ? (
      this.setState({message: "Don't worry, you will do better next time. Lets try somthing else"}),
      // // tidy up
      this.getMathsQuestion(),
      // // next action
      this.getNewGame()
    ) : 
      this.setState({
        message: 'incorrect, please try again',
        answer: ''
      })
  }

  // input event handler
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  // calculates the correct answer
  getAnswer = () => {
    const operator = this.state.operator
    switch (operator) {
      case '+':
        return this.state.firstNumber + this.state.secondNumber
      case '-':
        return this.state.firstNumber - this.state.secondNumber
      case 'x':
        return this.state.firstNumber * this.state.secondNumber
      case '÷':
        return this.state.firstNumber / this.state.secondNumber
    }
  }

  // validate answer is correct
  validateAnswer = () => {
    return this.state.answer == this.getAnswer()
  }

  // render the component
  render(){
    return(
      <div>
        {this.state.message != '' && <p>{this.state.message}</p>}
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label id='maths-question'>
            {`${this.state.firstNumber} ${this.state.operator} ${this.state.secondNumber} = `}
            <input name='answer' value={this.state.answer} placeholder='?' onChange={this.handleChange} autoFocus/>
          </label>
        </form>
      </div>
    )
  }
}


// export component
export default connect()(GameMathsAttack)