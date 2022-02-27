const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const slackRoute = require('./routes/slackRoutes');
const userRoute = require('./routes/userRoutes');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.status(200).json({
    message: res.json,
    app: 'Ngrok is live',
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/slack', slackRoute);
app.use('/api/v1/users', userRoute);

module.exports = app;
