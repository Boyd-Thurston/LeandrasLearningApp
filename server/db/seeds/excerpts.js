
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('excerpts').del()
    .then(function () {
      // Inserts seed entries
      return knex('excerpts').insert([
        {id: 1, excerpt: 'rowValue1', question: '', possible_answers: "['','','','']", answer: ''},
        {id: 2, excerpt: 'rowValue2', question: '', possible_answers: "['','','','']", answer: ''},
        {id: 3, excerpt: 'rowValue3', question: '', possible_answers: "['','','','']", answer: ''}
      ])
    })
}
