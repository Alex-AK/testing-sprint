const db = require('./dbConfig');

module.exports = {
  add,
  getAll
};

function getAll() {
  return db('games');
}

async function add(user) {
  const [id] = await db('games').insert(user, 'id');

  return db('games')
    .where({ id })
    .first();
}
