const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: {
    type: Number
  },
  id: {
    type: Number
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  comments: {
    type: String
  }
});

module.exports = mongoose.model('Post', PostSchema);
