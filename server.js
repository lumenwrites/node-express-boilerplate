const express = require('express')
const path = require('path')
const app = express()

var config = require('./config.json');

app.set('view engine', 'ejs')

/* Serve static files */
app.use('/static', express.static(path.resolve(__dirname, './static')))

// Routes
app.get('/', function (req, res) {
    res.render('index', {html: 'Hello', config: config})
})

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log('Running on port 3000!')
})
