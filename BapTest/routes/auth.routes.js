const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');
const {verifyNoAuthSQLInjection} = require('../middleware/verifyInput');

router.route('/login')
    .post([verifyNoAuthSQLInjection], controller.signin);

module.exports = router;