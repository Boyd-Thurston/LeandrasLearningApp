
exports.up = knex => {
  return knex.schema.createTable('statistics', table => {
    table.increments('id').primary()                      
    table.interger('user_id')
    table.interger('maths_skill_level')
    table.interger('maths_addition')
    table.interger('maths_subtraction')
    table.interger('maths_multiplication')
    table.interger('maths_division')
    table.interger('reading_skill_level')
    table.interger('reading_text')
    table.interger('reading_comprehension')
    table.interger('Facts')
    table.interger('Logic')
    table.interger('Memory')
    table.interger('telling_time')
    table.interger('financial_literacy')
    table.interger('hand_mouse_coordernation')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('statistics')
}
