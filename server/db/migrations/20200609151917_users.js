
exports.up = (knex, Promise) => {
 return knex.schema.createTable('users', table => {
   table.increments('id').primary()
   table.string('username').unique()
   table.string('hash')
   table.string('email')
   table.boolean('is_child').defaultTo(false)
   table.integer('parent_id')
 }) 
}

exports.down = (knex, Promise) => {
 return knex.schema.dropTable('users')
}
