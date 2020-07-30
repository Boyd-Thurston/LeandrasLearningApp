// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { getRandomSelection, getRandomNumber } from '../utils/lib'

// define class component
class GameMathsAttack extends React.Component {
  // set initial state
  state = {
    firstNumber = '',
    secondNumber = '',
    operator = '',
    answer = '',
    message = ''
  }

  // generate random variables and set state to values
  componentDidMount(){
    this.setState({
      firstNumber = getRandomNumber(1, 10),
      secondNumber = getRandomNumber(1, 10),
      operator = getRandomSelection(['+', '-', 'x', '÷'])
    })
  }

  // submit event handler
  handleSubmit = event => {
    // prevent default behaviour
    event.preventDefault()
    // check answer
    this.validateAnswer() ? this.setState({message: 'corret'})  : this.setState({message: 'incorrect, please try again'})
    // next action

    // tidy up
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
            <input name='answer' value={this.state.answer} placeholder='?'/>
          </label>
        </form>
      </div>
    )
  }
}


// export component
export default connect()(GameMathsAttack)