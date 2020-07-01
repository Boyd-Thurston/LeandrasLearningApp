// local imports
import { SAVE_USER, LOG_OFF_USER, USER_LOG_OFF } from "../actions"

// define initial state
const initialState = []

// define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {username: action.username}
    case USER_LOG_OFF:
      localStorage.removeItem('token')
      return initialState 
    default: 
      return state
  }
}

// export reducer
export default reducer