const express = require('express');
const router = express.Router();
const Gamer = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');

// generating Salt to hash passwords. 
//var BCRYPT_SALT_ROUNDS = 12;

// adding Gamer credentials to database.
router.post('/signup', function(req, res) {
    Gamer.create(req.body)
    .then((gamer) => {
        console.log(gamer);
        res.send(gamer);
    })

    .catch((err) => {
        console.log(err);
        res.status(400).json({msg: 'Failed Signup', err});
    });
});

router.post('/login', 
    passport.authenticate('local'),
    (req,res) => {
        console.log(req.gamer);
        res.json(req.gamer);
});

router.post('/logout', function(req,res) {
    req.logOut();
    res.status(200).json({message: 'Logout successful'});
});

module.exports = router;
