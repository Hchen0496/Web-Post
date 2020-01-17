const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middleware/authentication');

const { Comment } = db;

router.post('/:user_id/:post_id',)