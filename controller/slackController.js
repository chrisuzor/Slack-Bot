const superagent = require('superagent')
const fs = require('fs')
const actions = JSON.parse(fs.readFileSync(`${__dirname}/../interactiveButtons/actions.json`));


exports.botCommand = (req, res) => {
    console.log(req.body)
    res.status(200).json(actions)
};

exports.slackActions = (req, res) => {
    console.log("Actions")
    var payload = JSON.parse(req.body.payload)
    response_url = payload.response_url
    res.status(200).send();
    console.log(req.responseJson)
    superagent.post(response_url)
        .send(req.responseJson)
        .then('Success').catch((err) => {
             console.log(err)
        });
}