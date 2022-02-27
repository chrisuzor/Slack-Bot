/* eslint-disable camelcase */
const superagent = require('superagent');
const fs = require('fs');

const actions = JSON.parse(
  fs.readFileSync(`${__dirname}/../interactiveButtons/actions.json`)
);

exports.botCommand = (req, res) => {
  console.log(req.body);
  res.status(200).json(actions);
};

exports.slackActions = (req, res) => {
  const payload = JSON.parse(req.body.payload);
  const { response_url } = payload;
  res.status(200).send();
  superagent
    .post(response_url)
    .send(req.responseJson)
    .then('Success')
    .catch((err) => {
      console.log(err);
    });
};
