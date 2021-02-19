const express = require('express')
const cors = require('cors');
const app = express()
const { postNoBills } = require('./billData.js');

app.use(cors());

app.get('/yo', (req, res) => {
    res.json(
        {
            here: 'there',
            anger: 'relax'
        }
    )
})

app.get('/postNoBills', (req, res) => {
    res.json({ postNoBills });
});

app.get('/postNoBills/:mood', (req, res) => {

    const mood = (req.params.mood);

    const guidance = postNoBills.find((quote) =>
        quote.mood === mood);

    res.json({ guidance });
});

module.exports = {
    app
}