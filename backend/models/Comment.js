
// models/Comment.js
const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Comment', CommentSchema);
