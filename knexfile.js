module.exports = {
  testing: {
    client: 'sqlite3',
    connection: { filename: './data/games.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './data/seeds' }
  }
};
