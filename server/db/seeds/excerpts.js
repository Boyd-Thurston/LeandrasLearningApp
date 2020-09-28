
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('excerpts').del()
    .then(function () {
      // Inserts seed entries
      return knex('excerpts').insert([
        {
          id: 1, 
          title: "Black Beauty",
          author: "Anna Sewell",
          excerpt: "The first place that I can well remember was a large pleasant meadow with a pond of clear water in it. Some shady trees leaned over it, and rushes and water-lilies grew at the deep end. Over the hedge on one side we looked into a plowed field, and on the other we looked over a gate at our master's house, which stood by the roadside; at the top of the meadow was a plantation of fir trees, and at the bottom a running brook overhung by a steep bank.", 
          question: "what is the first place Black Beauty can well remember?", 
          possible_answers: "['a school','a field with other horses','a large pleasant meadow','a plowed field']", 
          answer: 'a large pleasant meadow'
        },
        {
          id: 2,
          title: "Black Beauty",
          author: "Anna Sewell", 
          excerpt: "Joe Green went on very well; he learned quickly and was so attentive and careful that John began to trust him in many things; but as I have said, he was small for his age, and it was seldom that he was allowed to exercise either Ginger or me;", 
          question: "who was Joe seldom allowed to exercise?", 
          possible_answers: "['Ginger or Merrylegs','Ginger or me','Me and Captain','Cheetah and Snail']", 
          answer: 'Ginger or me'},
      ])
    })
}
