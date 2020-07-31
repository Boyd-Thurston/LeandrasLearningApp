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
      firstNumber: getRandomNumber(1, 10),
      secondNumber: getRandomNumber(1, 10),
      operator: getRandomSelection(['+', '-', 'x', '÷']),
      answer: '',
      message: '',
      attempts: 0
    })
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
    this.validateAnswer() ? this.setState({message: 'corret'})  : this.setState({message: 'incorrect, please try again'})
    // tidy up
    // ToDo: send update to child statistics
    this.getMathsQuestion()
    // next action
    this.props.dispatch({type: CLEAR})
    this.props.dispatch(changeCurrentGameRandomly())
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
        <form onSubmit={this.handleSubmit}>
          <label id='maths-question'>
            {`${this.state.firstNumber} ${this.state.operator} ${this.state.secondNumber} = `}
            <input name='answer' value={this.state.answer} placeholder='?' onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    )
  }
}


// export component
export default connect()(GameMathsAttack)