// local imports
import { EXCERPTS_SAVE_EXCERPTS_LIST } from "../actions"

// define initial state
const initialState = []

// define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EXCERPTS_SAVE_EXCERPTS_LIST:
      return action.excerpts
    default: 
      return state
  }
}

// export reducer
export default reducer