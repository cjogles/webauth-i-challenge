
exports.seed = function(knex) {
  return knex('users').insert([
    {id: 1, username: 'user1', password: "bacon1"},
    {id: 2, username: 'user2', password: "bacon2"},
    {id: 3, username: 'user3', password: "bacon3"}
  ]);
};
