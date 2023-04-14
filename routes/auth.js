var express = require('express');
var router = express.Router();

const authHandler = require('./handle/auth');

router.post('/register', authHandler.register);
router.post('/login', authHandler.login);

module.exports = router;
