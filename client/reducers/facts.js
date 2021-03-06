// local imports
import { FACTS_SAVE_FACTS_LIST } from "../actions"

// define initial state
const initialState = []

// define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FACTS_SAVE_FACTS_LIST:
      return action.facts
    default: 
      return state
  }
}

// export reducer
export default reducer