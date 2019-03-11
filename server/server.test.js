// bring in supertest
const request = require('supertest');
const server = require('./server');

const db = require('../data/dbConfig');

const testData = {
  title: 'Pacman', // required
  genre: 'Arcade' // required
  // releaseYear: 1980 // not required
};

afterEach(async () => {
  await db('games').truncate();
});

describe('Server', () => {
  describe('POST request to "/api/games" endpoint', () => {
    it('successful post returns 201 Created, field requirements met', async () => {
      const res = await request(server)
        .post('/api/games')
        .send(testData);

      expect(res.status).toBe(201);
    });

    it('missing required field returns 422 Unprocessable Entity', async () => {
      const missingAField = {
        title: 'Pacman'
      };

      const res = await request(server)
        .post('/api/games')
        .send(missingAField);

      expect(res.status).toBe(422);
    });

    it('incorrect data key returns 422 internal server error', async () => {
      const incorrectFieldName = {
        name: 'Pacman',
        genre: 'Arcade'
      };

      const res = await request(server)
        .post('/api/games')
        .send(incorrectFieldName);

      expect(res.status).toBe(422);
    });

    it.skip('non-unique title returns 405 Not Allowed', async () => {
      const nonUniqueTitle = {
        title: 'Pacman',
        genre: 'Arcade'
      };

      request(server)
        .post('/api/games')
        .send(testData);

      const res2 = await request(server)
        .post('/api/games')
        .send(nonUniqueTitle);

      expect(res2).toBe(405);
    });
  });

  describe('GET request to "/api/games" endpoint', () => {
    it('successful get returns 200 OK', async () => {
      const res = await request(server)
        .post('/api/games')
        .send(testData);

      expect(res.status).toBe(201);

      const res2 = await request(server).get('/api/games');

      expect(res2.status).toBe(200);
    });

    it('returns list of games as an array', async () => {
      const add = await request(server)
        .post('/api/games')
        .send(testData);

      const res = await request(server).get('/api/games');

      expect(res.text).toContain('[' && ']');
    });

    it('returns json format', async () => {
      // test json return
      const res = await request(server).get('/api/games');

      expect(res.type).toBe('application/json');
    });

    it('returns empty array if no data stored', async () => {
      const res = await request(server).get('/api/games');

      expect(res.text).toBe('[]');
    });
  });
});
