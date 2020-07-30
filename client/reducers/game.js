// local imports
import { GAME_CHANGE_CURRENT } from "../actions"
import { getRandomSelection } from "../utils/lib"

// define initial state
const initialState = getRandomSelection(['Maths Attack'])

// define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_CHANGE_CURRENT:
      return action.game
    default: 
      return state
  }
}

// export reducer
export default reducer