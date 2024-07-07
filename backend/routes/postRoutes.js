const express = require('express');
const { createPost, getPosts, search, upload } = require('../controllers/post_controller');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, upload.single('image'), createPost);
router.get('/', getPosts);
router.get('/search', search);

module.exports = router;
