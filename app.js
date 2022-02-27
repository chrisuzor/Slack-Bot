const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
slackRoute = require('./routes/slackRoutes')

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.get('/', (req, res) => {
    res.status(200).json({
        'message': res.json,
        'app': 'Ngrok is live' 
    });
});

app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/v1/slack', slackRoute)


module.exports = app