// import external modules
import request from 'superagent'

// local imports
import { getToken } from '../utils/lib'

// define routes URLS
const baseUrl = '/api/v1'
const authRoute = '/auth'
const parentRoute = '/parent'

// api calls

// reister a new parent user
export function addNewParentUser(user) {
  return request.post(`${baseUrl}${authRoute}/register/parent`)
    .send(user)
    .then(res => res.body)
}

// reister a new child user
export function addNewChildUser(user) {
  return request.post(`${baseUrl}${authRoute}/register/child`)
    .set({ 'Content-Type': 'application/json'})
    .set({ 'Authorization': `Bearer ${getToken()}`})
    .send(user)
    .then(res => res.body)
}

// verify a users credentails
export function userSignIn(credentails) {
  return request.post(`${baseUrl}${authRoute}/signin`)
  .send(credentails)
  .then(res => res.body)
}

// get a varified users details
export function getUserDetails(userId) {
  return request.get(`${baseUrl}${authRoute}/user`)
  .set({ 'Content-Type': 'application/json'})
  .set({ 'Authorization': `Bearer ${getToken()}`})
  .then(res => res.body)
}

// get a list of children registered by loged in parent
export function getChildrenList(){
  console.log('api has been called');
  return request.get(`${baseUrl}${parentRoute}/children`)
  .set({ 'Content-Type': 'application/json'})
  .set({ 'Authorization': `Bearer ${getToken()}`})
  .then(res => res.body)
}