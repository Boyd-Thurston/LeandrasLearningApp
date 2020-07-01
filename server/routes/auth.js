// import external modules
const express = require('express')
const verifyJwt = require('express-jwt')

// local imports
const { createUser, verifyUser, getUserById } = require('../db/users')
const token = require('../auth/token')

// define router
const router = express.Router()

// define routes
router.post('/register', register, token.issue)
router.post('/signin', signIn, token.issue)
router.get('/user', verifyJwt({secret: process.env.JWT_SECRET, algorithms: ['RS256']}), getUser)


// supporting functions to routs
function register (req, res, next) {
  const { username, password } = req.body
  createUser({username, password})
    .then(([id]) => {
      res.locals.userId = id
      next()
    })
    .catch(({message}) => {
      // todo research how this works in Postgres
      if(message.includes('UNIQUE constraint failed: users.username')){
        return res.status(400).json({
          ok: false,
          message: 'Username already exists.'
        })
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happend. We don't know why."
      })
    })
}

function signIn (req, res, next) {
  const { username, password } = req.body
  verifyUser(username, password)
    .then(id => {
      res.locals.userId = id
      next()
    })
    .catch(err => res.status(401).json({
      ok: false,
      message: 'Username or password are not valid'
    }))
}

function getUser (req, res) {
  getUserById(req.user.id)
    .then(({username}) => res.json({
      ok: true,
      username
    }))
    .catch(() => res.status(500).json({
      ok: false,
      message: 'An error occurred while retrieving your user profile'
    }))
}

// export router
module.exports = router