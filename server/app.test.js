const request = require('supertest');
const app = require('./app.js');

test('Serves up an index.html', async () => (
  request(app)
    .get('/')
    .expect('Content-Type', /text\/html/)
    .expect(200)
    .end((err) => {
      if (err) throw err;
    })
));
