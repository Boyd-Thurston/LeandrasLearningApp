
exports.up = knex => {
  return knex.schema.createTable('exerpts', table => {
    table.increments('id').primary()
    table.text('exerpt')
    table.text('possible_answers')
    table.string('answer')
  }) 
 }
 
 exports.down = knex => {
  return knex.schema.dropTable('exerpts')
 }