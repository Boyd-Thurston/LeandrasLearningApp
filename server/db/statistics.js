// STATISTICS TABLE DATABASE FUNCTIONS
// 
// this set of functions contains all the db queries the relate 
// specificaly to the statistics table in the db.

// local imports
const connection = require('./connection')

// updates an individual statistic
function updateStatsById (id, toBeUpdated, db = connection) {
  return db('statistics').where('id', id).select('*').first()
    .then(currentStats => {
      const newStat = currentStats[toBeUpdated] + 1
      return db('statistics').where('id', id).update({[toBeUpdated]: newStat})
    })
}

// export functions
module.exports = {
  updateStatsById
}