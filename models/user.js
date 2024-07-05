const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  website: {
    type: String
  },
  comments: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);
