exports.validateAction = async (req, res, next) => {
  const { action } = req.params;
  if (!process.env.ACTIONS.includes(action)) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid action',
    });
  }

  next();
};
