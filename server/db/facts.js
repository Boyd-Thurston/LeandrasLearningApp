// FACTS TABLE DATABASE FUNCTIONS
// 
// this set of functions contains all the db queries the relate 
// specificaly to the facts table in the db.

// local imports
const connection = require('./connection')

// gets a list of all facts in the database
function getFactsList(db = connection){
  return db('facts').select('*')
}

// export functions
module.exports = {
  getFactsList
}