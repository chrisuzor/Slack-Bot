const express = require('express');

const userController = require('../controller/userController');
const actionsValidator = require('../middleware/validateActions');

const router = express.Router();

router.route('/').get(userController.getAllUsers);

router.route('/:id').get(userController.getUser);

router
  .route('/:id/:action')
  .get(actionsValidator.validateAction, userController.getAnswer);

module.exports = router;
