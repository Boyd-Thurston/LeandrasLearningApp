
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('facts').del()
    .then(function () {
      // Inserts seed entries
      return knex('facts').insert([
        {id: 1, fact: "Cheetahs are the world's fastest land animal", answer: true},
        {id: 2, fact: "Cumulonimbus clouds are more commonly known as thunderclouds", answer: true},
        {id: 3, fact: "It's harder to explore space than the bottom of the ocean", answer: false},
        {id: 4, fact: "An asian elephant is bigger than an african elephant", answer: false},
        {id: 5, fact: "Jupiter's largest moon Ganymede is biggere than the planet Mercury", answer: true},
      ])
    })
}
