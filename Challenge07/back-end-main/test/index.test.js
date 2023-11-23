const request = require('supertest');
const app = require('../app/index');
const swaggerDocument = require('../docs/swagger.json');

describe('Get /', () => {
  it('responds with 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 'OK',
      message: 'BCR API is up and running!'
    });
  });

  it('responds to /documentation.json', async () => {
    const response = await request(app).get('/documentation.json');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(swaggerDocument);
  });

  it('responds to /documentation', async () => {
    const response = await request(app).get('/documentation').redirects(1);
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('<title>Swagger UI</title>');
  });
});
