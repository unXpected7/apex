// // routes/post.js
// const express = require('express');
// const router = express.Router();
// const Post = require('../models/Post');

// // Create Post
// router.post('/posts', async (req, res) => {
//   try {
//     const post = new Post(req.body);
//     await post.save();
//     res.status(201).send(post);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Get all Posts
// router.get('/posts', async (req, res) => {
//   try {
//     const posts = await Post.find().populate('author').exec();
//     res.status(200).send(posts);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;