const { generateHash } = require("../../../../server/auth/hash");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      generateHash('test123')
    })
    .then(function (hashed) {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'testParentUser', hash: hashed, },
        {id: 2, username: 'testChildUser', hash: hashed, is_child: true, parent_id: 1 }
      ]);
    });
};
