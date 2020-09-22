
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exerpts').del()
    .then(function () {
      // Inserts seed entries
      return knex('exerpts').insert([
        {id: 1, exerpt: 'rowValue1', possible_answers: "['','','','']", answer: ''},
        {id: 2, exerpt: 'rowValue2', possible_answers: "['','','','']", answer: ''},
        {id: 3, exerpt: 'rowValue3', possible_answers: "['','','','']", answer: ''}
      ])
    })
}
