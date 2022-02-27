const User = require('../model/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAnswer = async (req, res) => {
  const questions = {
    mood: 'Welcome, How are you doing? ',
    hobby: 'What are your favorite hobbies',
  };
  try {
    const user = await User.findById(req.params.id);
    const { action } = req.params;
    res.status(200).json({
      status: 'success',
      data: {
        question: questions[action],
        answer: user[action],
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
