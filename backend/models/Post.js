// // models/Post.js
// const mongoose = require('mongoose');
// const PostSchema = new mongoose.Schema({
//   author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   content: String,
//   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//   createdAt: { type: Date, default: Date.now },
// });
// module.exports = mongoose.model('Post', PostSchema);
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  image: { type: String, default: '' },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
