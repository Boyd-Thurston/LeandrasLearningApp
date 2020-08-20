
exports.up = knex => {
  return knex.schema.createTable('facts', table => {
    table.increments('id').primary()
    table.string('fact')
    table.boolean('answer')
  }) 
 }
 
 exports.down = knex => {
  return knex.schema.dropTable('facts')
 }