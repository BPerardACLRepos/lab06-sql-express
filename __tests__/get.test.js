const { app } = require('../app.js')
const supertest = require('supertest')
const request = supertest(app)

it('gets the test endpoint', async (done) => {
    const expectation = {
        "here": "there",
        "anger": "relax"
    }

    // client is talking to the server
    // we are hitting our endpoint and getting a response
    const response = await request.get('/yo');

    // expect the status to be 200
    expect(response.status).toBe(200);
    // expect the response to have the right stuff in it
    expect(response.body).toEqual(expectation);
    // we call our weird cleanup function
    done();
});