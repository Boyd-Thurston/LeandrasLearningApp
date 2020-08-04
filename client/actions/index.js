// local imports
import { addNewParentUser, userSignIn, getUserDetails, getChildrenList } from '../apis'
import { setToken, getRandomSelection, gameList } from '../utils/lib'

// export action calls
export const SAVE_USER = 'SAVE_USER'
export const USER_LOG_OFF = 'USER_LOG_OFF'
export const PARENT_SAVE_CHILDREN_LIST = 'PARENT_SAVE_CHILDREN_LIST'
export const GAME_CHANGE_CURRENT = 'GAME_CHANGE_CURRENT'
export const CLEAR = 'CLEAR'

// define dispatch actions
export function saveUser(details){
  return {
    type: SAVE_USER,
    username: details.username,
    isChild: details.isChild,
    parentId: details.parentId
  }
}

export function changeCurrentGameRandomly() {
  return {
    type: GAME_CHANGE_CURRENT,
    game: getRandomSelection(gameList)
  }
}

// define Thunk functions

// sign in function
export function logIn(creds){
  return dispatch => {
    userSignIn(creds)
    .then(resBody => {
      setToken(resBody.token)
      return resBody
    })
    .then(() => getUserDetails())
    .then(userDetails => {dispatch(saveUser(userDetails))})
  }
}

// register function
export function newUserLogIn(details){
  return dispatch => {
    addNewParentUser(details)
    .then(resBody => {
      setToken(resBody.token)
      return resBody
    })
    .then(() => getUserDetails())
    .then(userDetails => {dispatch(saveUser(userDetails))})
  }
}

// fetch children list from DB based on parent account id
export function fetchChildrenList () {
  return dispatch => {
    getChildrenList()
    .then(childrenList => {dispatch({
      type: PARENT_SAVE_CHILDREN_LIST,
      children: childrenList
    })})
  }
}