// UTIITIES LIBARY FOR FRONTEND SUPPORTING FUNCTIONS


// _____ AUTH/JWT FUNCTIONS ______

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
  if(authToken != null){
    return true
  } else {
    return false
  }
}
