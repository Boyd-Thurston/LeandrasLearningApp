// import external modules
const express = require('express')

// local imports
const { getFactsList } = require('../db/facts')
const { getExcerptsList } = require('../db/excerpts')

// define router
const router = express.Router()

// define routes
router.get('/facts', getFacts)
router.get('/excerpts', getExcerpts)

// supporting functions to routs
function getFacts (req, res) {
  getFactsList()
    .then(factList => res.json(factList))
    .catch(() => res.status(500).json({
      ok: false,
      message: 'An error occurred while retrieving data from the database'
    }))
}

function getExcerpts (req, res) {
  getExcerptsList()
    .then(excerptsList => res.json(excerptsList))
    .catch(() => res.status(500).json({
      ok: false,
      message: 'An error occurred while retrieving data from the database'
    }))
}

// export router
module.exports = router