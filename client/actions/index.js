// local imports
import { addNewUser, userSignIn, getUserDetails } from '../apis'
import { setToken } from '../utils/lib'

// export action calls
export const SAVE_USER = 'SAVE_USER'
export const USER_LOG_OFF = 'USER_LOG_OFF'

// define dispatch actions
export function saveUser(details){
  return {
    type: SAVE_USER,
    username: details.username,
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
    addNewUser(details)
    .then(resBody => {
      setToken(resBody.token)
      return resBody
    })
    .then(() => getUserDetails())
    .then(userDetails => {dispatch(saveUser(userDetails))})
  }
}