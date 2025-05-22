const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller.js');
const authMiddleware = require('../middleware/auth.MiddleWare.js');




router.post('/register', userController.register); 
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get("/profile", authMiddleware.userAuth, userController.profile);
router.get('/accepted-ride', authMiddleware.userAuth, userController.acceptedRide);


module.exports = router;

