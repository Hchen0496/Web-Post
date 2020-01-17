const express = require('express');
const router = express.Router();

const authController = require('./auth');
const postsController = require('./posts');
const gamesController = require('./games');
const commentsController = require('./comments');
const appConfigController = require('./appConfig');

router.use('./auth', authController);
router.use('./posts', authController);
router.use('./games', authController);
router.use('./comments', authController);
router.use('./application-config', authController);

module.exports = router;