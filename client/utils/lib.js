// =========================================================
//     UTIITIES LIBARY FOR FRONTEND SUPPORTING FUNCTIONS
// =========================================================

// import external modules
import jwt from 'jsonwebtoken'


// ===============================
// _____ AUTH/JWT FUNCTIONS ______
// ===============================


// set JWT token in local storage
export function setToken (token) {
  localStorage.setItem('token', token)
}


// captures JWT details from local store
export function getToken () {
  return localStorage.getItem('token')
}


// checks to see if user is authenticated or not
export function isAuthenticated () {
  const authToken = getToken()
  const decodedToken = jwt.decode(authToken)
  const currentTime = Math.floor(Date.now() / 1000)
  if(authToken != null){
    // check if token is still valid or has expired
    if(decodedToken.exp > currentTime){
      return true
    } else {
      // clear expired token
      localStorage.removeItem('token')
      return false
    }
  } else {
    return false
  }
}



// ====================================
// _______ RANDOMISER FUNCTIONS _______
// ====================================


// random number generater
export function getRandomNumber (min, max ) {
  // set variables
  min = Math.ceil(min)
  max = Math.floor(max)
  // generate random number and return value
  return Math.floor(Math.random() * (max - min + 1)) + min
}


// random selection from given array
export function getRandomSelection (array) {
  // get random value to use for index
  const randomIndex = Math.floor(Math.random() * array.length)
  // return selected item from the array
  return array[randomIndex]
}


// randomly shuffles the order of a given array
export function getShuffledArray (array) {
  // set variables
  let shuffledArray = []
  let unshuffledArray = [...array]

  // loop throuhg passed array
  while(shuffledArray.length != array.length) {
    // get random value to use for index
    const randomIndex = Math.floor(Math.random() * unshuffledArray.length)
    // push random selcted item to shuffled array
    shuffledArray.push(unshuffledArray[randomIndex])
    // remove selected item form unshuffled array
    unshuffledArray.splice(randomIndex, 1)
    if(shuffledArray.length == array.length){
      // return the shuffled array
      return shuffledArray
    }
  }
}


// ===============================
// ______ GLOBAL VARIABLES _______
// ===============================

export const gameList = [
  'Memory',
  'wackamole',
  'Minesweeper',
  'Match them up',
  'Drag and Drop'
]


export const randomiserGameList = [
  'Maths Attack',
  'Maths Attack',
  'Maths Attack',
  'Maths Attack',
  'Reading Scroll',
  'Reading Scroll',
  'Reading Scroll',
  'True or False',
  'True or False',
  'Memory',
  // 'wackamole',
  // 'Minesweeper',
  // 'Match them up',
  // 'Drag and Drop'
]