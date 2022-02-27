const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A User must have a username'],
    unique: true,
  },
  userId: {
    type: String,
    required: [true, 'A User must have an ID'],
    unique: true,
  },
  mood: String,
  hobby: String,
});

userSchema.plugin(findOrCreate);
const User = mongoose.model('User', userSchema);

module.exports = User;
