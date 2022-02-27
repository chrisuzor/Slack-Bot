const fs = require('fs')
const hobbies = JSON.parse(fs.readFileSync(`${__dirname}/../interactiveButtons/hobbies.json`));

exports.determineResponse = (req, res, next) => {
    var payload = JSON.parse(req.body.payload)
    response_url = payload.response_url
    if(payload.actions[0].action_id == 'static_select-action'){
        req.responseJson = {"text": "Thank you"} 
    }else{
        req.responseJson = {"blocks": hobbies}
    }
    next();
};