// import external modules
const express = require('express')
const verifyJwt = require('express-jwt')

// local imports
const { getChildrenByParentId } = require('../db/users')

// define router
const router = express.Router()

// define routes
router.get('/children', verifyJwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}), getChildren)

// supporting functions to routs
function getChildren (req, res) {
  getChildrenByParentId(req.user.id)
    .then(children => res.json(children))
    .catch(() => res.status(500).json({
      ok: false,
      message: 'An error occurred while retrieving your user profile'
    }))
}

// export router
module.exports = router