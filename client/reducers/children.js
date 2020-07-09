// local imports
import { PARENT_SAVE_CHILDREN_LIST } from "../actions"

// define initial state
const initialState = []

// define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PARENT_SAVE_CHILDREN_LIST:
      return action.children
    default: 
      return state
  }
}

// export reducer
export default reducer