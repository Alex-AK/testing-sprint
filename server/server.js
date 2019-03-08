const express = require('express');

const server = express();

const db = require('../data/game-model');

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'API working!' });
});

server.get('/api/games', async (req, res) => {
  try {
    const games = await db.getAll();

    if (games) {
      res.status(200).json(games);
    } else {
      res.status(200).json({ games: [] });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get games', error });
  }
});

server.post('/api/games', async (req, res) => {
  const newGame = req.body;
  const { title, genre } = req.body;

  if (!title || !genre) {
    res.status(422).json({ message: 'Missing required field.' });
  }

  try {
    const added = await db.add(newGame);

    if (added) {
      res.status(201).json({ message: 'Game successfully added', newGame });
    } else {
      res
        .status(400)
        .json({ message: 'Server could not understand your request' });
    }
  } catch (error) {
    res.status(500);
  }
});

module.exports = server;
