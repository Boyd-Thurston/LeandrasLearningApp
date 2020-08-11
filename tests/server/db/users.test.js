// set up enviroment and connection
const knex = require('knex')
const config = require('../../../knexfile')
const env = 'test'
const database = knex(config[env])

// local imports
const db_user_functions = require('../../../server/db/users')

// build and seed test database
beforeAll(() => {
  return database.migrate.latest()
  .then(() => {
    return database.seed.run()
  })
})

test('test suite is fuctional for: "server/db/users.js"', () => {
  expect(1).toBeGreaterThan(0)
})