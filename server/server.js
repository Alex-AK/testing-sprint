const express = require('express');

const server = express();

const games = require('../data/game-model');

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'API working!' });
});

server.get('/api/games', async (req, res) => {
  try {
    const games = await games.getAll();

    if (games) {
      res.status(200).json(games);
    } else {
      res.status(200).send([]);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

server.post('/api/games', async (req, res) => {
  const newGame = req.body;
  const { title, genre } = req.body;

  if (!title || !genre) {
    res.status(422).json({ message: 'Missing required field.' });
  }

  try {
    const added = await games.add(newGame);

    if (added) {
      res.status(201).json({ message: 'Game successfully added', newGame });
    } else {
      res.status();
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = server;
