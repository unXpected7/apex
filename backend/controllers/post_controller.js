const Post = require('../models/Post');
const User = require('../models/User');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};

exports.upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

exports.createPost = async (req, res) => {
  const { content } = req.body;
  const image = req.file ? req.file.path : '';

  try {
    const post = await Post.create({
      author: req.user.id,
      content,
      image,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  try {
    const posts = await Post.find().sort({ createdAt: -1 }).skip(skip).limit(limit).populate('author', 'username avatar');
    const hasMore = posts.length === limit;

    res.json({ posts, hasMore });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.search = async (req, res) => {
  const query = req.query.q;

  try {
    const posts = await Post.find({ content: new RegExp(query, 'i') }).populate('author', 'username avatar');
    const users = await User.find({ username: new RegExp(query, 'i') });

    const results = [...posts.map(post => ({ ...post.toObject(), type: 'post' })), ...users.map(user => ({ ...user.toObject(), type: 'user' }))];

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
