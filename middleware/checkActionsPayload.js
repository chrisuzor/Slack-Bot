/* eslint-disable prefer-destructuring */
const fs = require('fs');

const hobbies = JSON.parse(
  fs.readFileSync(`${__dirname}/../interactiveButtons/hobbies.json`)
);

exports.determineResponse = (req, res, next) => {
  const payload = JSON.parse(req.body.payload);

  if (payload.actions[0].action_id === 'static_select-action') {
    console.log(payload.actions[0].selected_option.value);
    req.responseJson = { text: 'Thank you' };
    req.modelAction = 'update';
  } else {
    req.responseJson = { blocks: hobbies };
    req.modelAction = 'create';
  }
  next();
};
