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

it('gets the test endpoint', async (done) => {
    const expectation = {
        "postNoBills": [
            {
                "mood": "trust",
                "quote": "I'm suspicious of people who don't like dogs, but I trust a dog when it doesn't like a person."
            },
            {
                "mood": "marriage",
                "quote": "If you have someone you think is the one, take them and travel around the world. Buy a plane ticket for the two of you to travel all over the world, to places that are hard to reach and hard to get out of. And when you land at JFK and you're still in love with that person, get married."
            },
            {
                "mood": "relaxed",
                "quote": "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself."
            },
            {
                "mood": "happiness",
                "quote": "Life is so damn short. For fuck's sake, just do what makes you happy."
            },
            {
                "mood": "stairs",
                "quote": "Where do these stairs go?\n        They go up!"
            },
            {
                "mood": "politics",
                "quote": "The Best Way to teach your kids about taxes is by eating 30% of their ice cream."
            }
        ]
    }

    const response = await request.get('/postnobills');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();
});

it('gets the test endpoint', async (done) => {
    const expectation = {
        "guidance": {
            "mood": "trust",
            "quote": "I'm suspicious of people who don't like dogs, but I trust a dog when it doesn't like a person."
        }
    }

    const response = await request.get('/postnobills/trust');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();
});