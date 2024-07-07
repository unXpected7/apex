// // routes/comment.js
// const express = require('express');
// const router = express.Router();
// const Comment = require('../models/Comment');

// // Create Comment
// router.post('/comments', async (req, res) => {
//   try {
//     const comment = new Comment(req.body);
//     await comment.save();
//     res.status(201).send(comment);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// module.exports = router;