// local imports
import { GAME_CHANGE_CURRENT, CLEAR } from "../actions"
import { getRandomSelection } from "../utils/lib"

// define initial state
const initialState = getRandomSelection(['Maths Attack', 'Memory'])

// define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR:
      return ''
    case GAME_CHANGE_CURRENT:
      return action.game
    default: 
      return state
  }
}

// export reducer
export default reducer