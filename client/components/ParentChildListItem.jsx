// import external modules
import React from 'react'

// define class component
class ParentChildListItem extends React.Component {

  state = {
    expanded: false
  }

  handleClick = event => {
    if(this.state.expanded) {
      this.setState({expanded: false})
    } else {
      this.setState({expanded: true})
    }
  }

  render(){
    return (
      <div onClick={this.handleClick}>
        <div>
          <h4>{this.props.username}</h4>
        </div>
        {this.state.expanded == true &&
        <div>
          <p>I will be statistical data</p>
        </div>
        }
      </div>
    )
  }
}

// export class component
export default ParentChildListItem

