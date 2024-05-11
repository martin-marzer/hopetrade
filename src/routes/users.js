const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users");

const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");

router.get('/login',  guestMiddleware, usersController.login);
router.post('/login', guestMiddleware, usersController.loginProcess)

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', guestMiddleware, usersController.registerProcess);

router.get('/logout', authMiddleware, usersController.logout)

router.get('/profile',  authMiddleware);



module.exports = router;