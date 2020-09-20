
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exerpts').del()
    .then(function () {
      // Inserts seed entries
      return knex('exerpts').insert([
        {id: 1, export: 'rowValue1', possible_answers: "['','','','']", answer: ''},
        {id: 2, export: 'rowValue2', possible_answers: "['','','','']", answer: ''},
        {id: 3, export: 'rowValue3', possible_answers: "['','','','']", answer: ''}
      ])
    })
}
