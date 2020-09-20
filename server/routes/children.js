// import external modules
const express = require('express')

// local imports
const { getFactsList } = require('../db/facts')

// define router
const router = express.Router()

// define routes
router.get('/facts', getFacts)

// supporting functions to routs
function getFacts (req, res) {
  getFactsList(req.user.id)
    .then(factList => res.json(factList))
    .catch(() => res.status(500).json({
      ok: false,
      message: 'An error occurred while retrieving data from the database'
    }))
}

// export router
module.exports = router