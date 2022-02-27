/* eslint-disable prettier/prettier */
const supertest = require('supertest');
const fs = require('fs');
const app = require('../app');
const server = require('../server');

const request = supertest(app);

const { connectDB, disconnectDB } = require('../database');

const actions = JSON.parse(
  fs.readFileSync(`${__dirname}/../interactiveButtons/actions.json`)
);

describe('API test', () => {
  beforeAll(() => {
    connectDB();
  });

  afterAll(() => {
    disconnectDB();
    // server.close();
  });

  describe('POST /api/v1/slack/bot', () => {
    it('Should respond with actions json after /bot command is triggered', async () => {
      const res = await request.post('/api/v1/slack/bot', {});
      expect(res.status).toBe(200);
      expect(res.body).toStrictEqual(actions);
    });
  });
})