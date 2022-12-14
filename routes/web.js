const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');
const HomeController = require('../controllers/home_controller');

router.get('/', HomeController.index);
router.get('/register', UserController.register);
router.post('/register', UserController.registerUser);
router.get('/login', UserController.login);
router.post('/login', UserController.loginUser);
router.get('/logout', UserController.logout);
router.get('/users', UserController.dashboard);
module.exports = router;