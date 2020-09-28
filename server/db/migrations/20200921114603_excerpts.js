
exports.up = knex => {
  return knex.schema.createTable('excerpts', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.text('excerpt')
    table.text('possible_answers')
    table.string('question')
    table.string('answer')
  }) 
 }
 
 exports.down = knex => {
  return knex.schema.dropTable('excerpts')
 }