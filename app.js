const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());

app.get('/yo', (req, res) => {
    res.send('yo')
})

module.exports = {
    app
}