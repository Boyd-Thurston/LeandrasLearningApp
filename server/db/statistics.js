// STATISTICS TABLE DATABASE FUNCTIONS
// 
// this set of functions contains all the db queries that relate specificaly 
// to the statistics table in the db.

// local imports
const connection = require('./connection')

// creates a new statistic record
function createStatsRecord (userId, db = connection) {
  return db('statistics').insert({user_id: userId})
}

// updates an individual statistic
function updateStatsById (userId, toBeUpdated, db = connection) {
  return db('statistics').where('user_id', userId).select('*').first()
    .then(currentStats => {
      const newStat = currentStats[toBeUpdated] + 1
      return db('statistics').where('user_id', userId).update({[toBeUpdated]: newStat})
    })
}

// export functions
module.exports = {
  createStatsRecord,
  updateStatsById
}