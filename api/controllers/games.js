const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middleware/authentication');

const { Game } = db;

router.get('/', (req,res) => {
    Game.find({})
        .then(games => res.json(games));
});

router.post('/', (req, res) => {
    const package = req.body;
    Game.create({package})
        .then(game => res.status(201).json(game))
        .catch(err => res.status(400).json(err));
});

router.get('/:title', (req, res) => {
    Game.find({
        title: req.params.title
    })
    .then(games => res.json(games));
});

router.get('/:genre', (req, res) => {
    Game.find({
        genre: req.params.genre
    })
    .then(games => res.json(games));
});