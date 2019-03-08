// bring in supertest
const request = require('supertest');
const server = require('./server');

const testData = {
  title: 'Pacman', // required
  genre: 'Arcade', // required
  releaseYear: 1980 // not required
};

describe('Server', () => {
  describe('POST request to "/games" endpoint', () => {
    it.skip('successful post returns 201 Created', () => {
      // write test to verify status code responses
    });

    it.skip('post receives proper body and required fields', () => {
      // validate required field is in body
    });

    it.skip('missing required field returns 422 Unprocessable Entity', () => {
      // if information is incomplete return 422
    });
  });

  describe('GET request to "/games" endpoint', () => {
    it.skip('successful get returns 200 OK', () => {
      // write test to verify status code responses
    });

    it.skip('returns list of games as an array', () => {
      // endpoint should return list of games
    });

    it.skip('returns json format', () => {
      // test json return
    });

    it.skip('returns empty array if no data stored', () => {
      // endpoint should return an array, even if no data is stored
    });
  });
});
