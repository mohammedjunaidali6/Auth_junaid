const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const middleware = require('../middleware/authorization') 

router.post('/signup' , auth.signup);
router.get('/login' , auth.login);
router.get('/users' ,middleware.verify, auth.getAllUsers);
router.get('/user' ,middleware.verify, auth.getUserById);
router.put('/change-password' ,middleware.verify, auth.changePassword);

module.exports = router