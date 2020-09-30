// EXCERPTS TABLE DATABASE FUNCTIONS
// 
// this set of functions contains all the db queries that relate specificaly 
// to the facts table in the db.

// local imports
const connection = require('./connection')

// gets a list of all excerpts in the database
function getExcerptsList(db = connection){
  return db('excerpts').select('*')
}

// export functions
module.exports = {
  getExcerptsList
}