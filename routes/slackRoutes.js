const express = require('express');

const slackController = require('../controller/slackController');
const checkActionsPayload = require('../middleware/checkActionsPayload');
const saveAndUpdate = require('../middleware/saveAndUpdateUser');

const router = express.Router();

router.route('/bot').post(slackController.botCommand);

router
  .route('/actions')
  .post(
    [checkActionsPayload.determineResponse, saveAndUpdate.saveAndUpdateUser],
    slackController.slackActions
  );

module.exports = router;
