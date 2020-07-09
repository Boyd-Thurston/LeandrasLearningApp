// USER TABLE DATABASE FUNCTIONS
// 
// this set of functions contains all the db queries the relate 
// specificaly to the user table in the db.

// local imports
const connection = require('./connection')
const { generateHash, verifyHash } = require('../auth/hash')

// creates a new user entry upon parent registeration
function createParentUser ({username, password, email }, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({username, hash, email}))
}

// creates a new user entry upon child registeration
function createChildUser ({username, password, parent_id }, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({username, hash, is_child: true, parent_id}))
}

// verifies a users credentails upon sing in
function verifyUser (username, password , db = connection) {
      return db('users').where('username', username).select('*').first()
        .then(user => {
          const isVerified = verifyHash(user.hash, password)
          return {
            id: user.id,
            isVerified: isVerified
          }
        })
        .then(user => {
          if(user.isVerified){
            return user.id
          } else { return "invalid"}
        })
}

// get a users profile
function getUserById (id, db = connection) {
  return db('users').where('id', id).select('username', 'is_child AS isChild', 'parent_id AS parentId').first()
}

// get a list of children registered by a parent by the parent id
function getChildrenByParentId (id, db = connection) {
  return db('users').where('parent_id', id).select('id', 'username')
}

// export functions
module.exports = {
  createParentUser,
  createChildUser,
  verifyUser,
  getUserById,
  getChildrenByParentId
}