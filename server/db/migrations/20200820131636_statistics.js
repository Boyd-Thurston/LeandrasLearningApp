
exports.up = knex => {
  return knex.schema.createTable('statistics', table => {
    table.increments('id').primary()                      
    table.integer('user_id').unique()
    table.integer('maths_skill_level').defaultTo(1)
    table.integer('maths_addition').defaultTo(0)
    table.integer('maths_subtraction').defaultTo(0)
    table.integer('maths_multiplication').defaultTo(0)
    table.integer('maths_division').defaultTo(0)
    table.integer('reading_skill_level').defaultTo(1)
    table.integer('reading_text').defaultTo(0)
    table.integer('reading_comprehension').defaultTo(0)
    table.integer('facts').defaultTo(0)
    table.integer('logic').defaultTo(0)
    table.integer('memory').defaultTo(0)
    table.integer('telling_time').defaultTo(0)
    table.integer('financial_literacy').defaultTo(0)
    table.integer('hand_mouse_coordernation').defaultTo(0)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('statistics')
}
