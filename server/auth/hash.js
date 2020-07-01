// import external modules
const sodium = require('libsodium-wrappers')

// define module functions
// returns a hash of a password string for storing in db
function generateHash (password) {
  return sodium.ready.then(() => 
    sodium.crypto_pwhash_str(
      password,
      sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
      sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
    )
  )
}

// varifies as password provided matches the hash in db
function verifyHash (hash, password) {
  return sodium.ready.then(() =>
    sodium.crypto_pwhash_str_verify(hash, password))
}

// export hash module
module.exports = {
  generateHash,
  verifyHash
}