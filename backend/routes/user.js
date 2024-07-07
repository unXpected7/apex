// // routes/user.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Create User
// router.post('/users', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).send(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// module.exports = router;

// ;
