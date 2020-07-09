// import external modules
import { combineReducers } from 'redux'

// local imports
import user from './user'
import children from './children'

// combine reducers to single reducer
const reducer = combineReducers({
  user,
  children
})

// export single reducer
export default reducer