
exports.up = knex => {
  return knex.schema.createTable('excerpts', table => {
    table.increments('id').primary()
    table.text('excerpt')
    table.text('possible_answers')
    table.text('question')
    table.string('answer')
  }) 
 }
 
 exports.down = knex => {
  return knex.schema.dropTable('excerpts')
 }