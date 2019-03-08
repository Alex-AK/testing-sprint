exports.up = function(knex) {
  return knex.schema.createTable('games', function(table) {
    table.increments();

    table.string('title', 255).notNullable();
    table.string('genre').notNullable();
    table.integer('releaseYear');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('games');
};
