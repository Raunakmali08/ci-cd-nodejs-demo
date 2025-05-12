const request = require('supertest');
const app = require('../index');  // Adjust if your entry point is not `index.js`

describe('GET /', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
