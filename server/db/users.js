// local imports
const connection = require('./connection')
const { generateHash, verifyHash } = require('../auth/hash')

// users table db functions

// creates a new user entry upon registeration
function createParentUser ({username, password, email }, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({username, hash, email}))
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
function getUserById (id,db =connection) {
  return db('users').where('id', id).select('username', 'is_child AS isChild', 'parent_id AS parentId').first()
}

// export functions
module.exports = {
  createParentUser,
  verifyUser,
  getUserById
}