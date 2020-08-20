
exports.up = knex => {
  return knex.schema.createTable('statistics', table => {
    table.increments('id').primary()                      
    table.integer('user_id')
    table.integer('maths_skill_level')
    table.integer('maths_addition')
    table.integer('maths_subtraction')
    table.integer('maths_multiplication')
    table.integer('maths_division')
    table.integer('reading_skill_level')
    table.integer('reading_text')
    table.integer('reading_comprehension')
    table.integer('Facts')
    table.integer('Logic')
    table.integer('Memory')
    table.integer('telling_time')
    table.integer('financial_literacy')
    table.integer('hand_mouse_coordernation')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('statistics')
}
