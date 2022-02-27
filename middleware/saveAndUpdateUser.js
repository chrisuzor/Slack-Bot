const User = require('../model/user');

exports.saveAndUpdateUser = async (req, res, next) => {
  try {
    console.log(req.modelAction);
    const payload = JSON.parse(req.body.payload);

    if (req.modelAction === 'create') {
      const body = {
        userId: payload.user.id,
        username: payload.user.username,
        name: payload.user.name,
        mood: payload.actions[0].value,
      };
      console.log(body);
      await User.create(body);
      next();
    } else {
      const filter = { userId: payload.user.id };
      const update = { hobby: payload.actions[0].selected_option.value };
      await User.findOneAndUpdate(filter, update);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      text: 'An error occurred',
      message: 'Invalid data sent',
    });
  }
  next();
};

