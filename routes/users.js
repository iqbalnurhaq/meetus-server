var express = require('express');
var router = express.Router();

const usersHandler = require('./handle/users');

const verifyToken = require('../middlewares/verifyToken');
const can = require('../middlewares/permission');

router.get('/', verifyToken, usersHandler.getUsers);

module.exports = router;
