// import external modules
import { combineReducers } from 'redux'

// local imports
import user from './user'
import children from './children'
import game from './game'
import facts from './facts'
import excerpts from './excerpts'

// combine reducers to single reducer
const reducer = combineReducers({
  user,
  children,
  game,
  facts,
  excerpts
})

// export single reducer
export default reducer