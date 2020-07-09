// import external modules
import React from 'react'
import { Link } from 'react-router-dom'

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
      <div className="expandable-div" onClick={this.handleClick}>
        <div className='expandable-div-constant-content'>
          <h3>{this.props.username}</h3>
        </div>
        {this.state.expanded == true &&
        <div className='expandable-div-hideable-content'>
          <p>I will be statistical data</p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo molestias quibusdam dolore sit impedit, soluta libero nostrum laboriosam fugiat reprehenderit veniam error a minus! Magnam eveniet nobis quae architecto numquam?
          <Link to={`/statistics:${this.props.id}`}>more detail</Link>
        </div>
        }
      </div>
    )
  }
}

// export class component
export default ParentChildListItem

