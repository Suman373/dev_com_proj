const express = require('express');
const router = express.Router();
const controllers = require('../controllers/authController.js');

// register user
router.post('/register', controllers.registerUser);
// login user
router.post('/login',controllers.loginUser);

module.exports = router;