// import external modules
const jwt = require('jsonwebtoken')

// define module funtion
function issue (req,res) {
  res.json({
    ok:true,
    message: 'Authentication successful.',
    token: createToken(res.locals.userId)
  })
}

function createToken (id) {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'})
}

// export token module
module.exports = {
  issue
}