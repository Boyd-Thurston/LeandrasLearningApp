// define connection
const enviroment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[enviroment]
const connection = require('knex')(config)

// export connnection
module.exports = connection