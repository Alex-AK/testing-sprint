// bring in supertest
const request = require('supertest');
const server = require('./server');

const testData = {
  title: 'Pacman', // required
  genre: 'Arcade' // required
  // releaseYear: 1980 // not required
};

describe('Server', () => {
  describe('POST request to "/api/games" endpoint', () => {
    it('successful post returns 201 Created', async () => {
      // write test to verify status code responses
      const res = await request(server)
        .post('/api/games')
        .send(testData);

      expect(res.status).toBe(201);
    });

    it('post receives proper body format and required fields', async () => {
      // validate required field is in body
      const properFormat = {
        title: 'Pacman',
        genre: 'Arcade'
      };
      expect(testData).toEqual(properFormat);

      //   const res = response(server)
      //   .post('/api/games')
      //   .send(testData);

      // expect(res.status).toEqual(201);
    });

    it('missing required field returns 422 Unprocessable Entity', async () => {
      // if information is incomplete return 422
      const missingAField = {
        title: 'Pacman'
      };

      const res = await request(server)
        .post('/api/games')
        .send(missingAField);

      expect(res.status).toBe(422);
    });
  });

  describe('GET request to "/api/games" endpoint', () => {
    it('successful get returns 200 OK', async () => {
      // write test to verify status code responses
      const res = await request(server).get('/api/games');

      expect(res.status).toBe(200);
    });

    it.skip('returns list of games as an array', async () => {
      // endpoint should return list of games
      const res = await request(server).get('/api/games');

      expect(res.data).toBe([]);
    });

    it.skip('returns json format', async () => {
      // test json return
      const res = await request(server).get('/api/games');

      expect(res.type).toBe('application/json');
    });

    it.skip('returns empty array if no data stored', async () => {
      // endpoint should return an array, even if no data is stored
      const res = await request(server).get('/api/games');

      expect(res.data).toBe([]);
    });
  });
});
