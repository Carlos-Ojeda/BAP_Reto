const express = require('express');
const router = express.Router();
const controller = require('../controllers/tasks.controller');
const { hasToken, verifyToken } = require('../middleware/authJwt');
const { verifyNoSQLInjection } = require('../middleware/verifyInput');

router.route('/task/:task_id')
    .get([hasToken, verifyToken, verifyNoSQLInjection], controller.getTask)

router.route('/')
    .get([hasToken, verifyToken, verifyNoSQLInjection], controller.getTasks)
    .post([hasToken, verifyToken, verifyNoSQLInjection], controller.createTask)
    .put([hasToken, verifyToken, verifyNoSQLInjection], controller.editTask)
    .delete([hasToken, verifyToken, verifyNoSQLInjection], controller.deleteTask)

module.exports = router;