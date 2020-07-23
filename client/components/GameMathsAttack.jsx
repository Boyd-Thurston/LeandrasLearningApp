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
    thirdNumber = '',
    skillLevel = 1,
    operator = ''
  }

  componentDidMount(){
    this.setState({
      firstNumber = getRandomNumber(1, 10),
      secondNumber = getRandomNumber(1, 10),
      thirdNumber = getRandomNumber(1, 10),
      operator = getRandomSelection(['+', '-', 'x', '÷'])
    })
    
  }

  

  // render the component
  render(){
    return(
      <>
      </>
    )
  }
}


// export component
export default connect()(GameMathsAttack)