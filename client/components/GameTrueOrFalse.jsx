// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports


// define class component
class GameTrueOrFalse extends React.Component {
  // set inital state
  state = {
    question: '',
    answer: null
  }

  // render class component
  render(){
    return(
      <div>

      </div>
    )
  }
}

// export class component
export default connect()(GameTrueOrFalse)