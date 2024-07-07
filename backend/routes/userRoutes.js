const express = require('express');
const { register, login, getUser, followUser, unfollowUser } = require('../controllers/user_controller');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', protect, getUser);
router.post('/:id/follow', protect, followUser);
router.post('/:id/unfollow', protect, unfollowUser);

module.exports = router;
