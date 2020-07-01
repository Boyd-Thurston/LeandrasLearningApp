// import external modules
import { combineReducers } from 'redux'

// local imports
import user from './user'

// combine reducers to single reducer
const reducer = combineReducers({
  user
})

// export single reducer
export default reducer