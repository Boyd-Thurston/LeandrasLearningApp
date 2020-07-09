// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { fetchChildrenList } from '../actions'
import ParentChildListItem from './ParentChildListItem'

// define class component
class ParentChildList extends React.Component {

  componentDidMount(){
    // call thunk to fetch children added by this parent account
    this.props.dispatch(fetchChildrenList())
  }

  render(){
    return(
      <>
        {this.props.children.length >= 1? 
          // map list of children 
          <>
            <h3>Registered Children:</h3>
            {this.props.children.map( (aChild, index ) => <ParentChildListItem key={index} username={aChild.username} id={aChild.id}/> )}
          </>
          :
          <p>you have no children registered</p>
        }
      </>
    )
  }
}

// map global state to the local props
function mapStateToProps(globalState) {
  return {
    children: globalState.children
  }
}

// export class component
export default connect(mapStateToProps)(ParentChildList)