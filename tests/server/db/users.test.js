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

// test: createParentUser({username, password, email }, db = connection) 
// extected: returns an id as a number

// test: createChildUser({username, password, parent_id }, db = connection) extected to return an id

// test: verifyUser(username, password , db = connection)
// extected: returns an id as a number

// test: getUserById(id, db = connection) 
// expected: returns an object with props username, isChild, parentId

// test: getChildrenByParentId(id, db = connection) 
// expected: retuns an array of objects with props id, username