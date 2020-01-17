const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middleware/authentication');

const { Post } = db;

router.get('/', (req,res) => {
    Post.find({})
        .then(posts => res.json(posts));
});

router.post('/', 
    passport.isAuthenticated(),
    (req,res) => {
        let { content } = req.body;
        Post.create({ content })
            .then(post => {
                res.status(201).json(post);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
);

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Post.findById(id)
        .then(post => {
            if(!post) {
                return res.sendStatus(404);
            }
            res.json(post);
        });
});

router.put('/:id',
    passport.isAuthenticated(),
    (req,res) => {
        const { id } = req.params;
        Post.findById(id)
            .then(post => {
                if(!post) {
                    return res.sendStatus(404);
                }
                post.content = req.body.content;
                post.save()
                    .then(post => {
                        res.json(post);
                    })
                    .catch(err => {
                        res.status(400).json(err);
                    });
            });
    }
);

router.delete('/id',
    passport.isAuthenticated(),
    (req,res) => {
        const { id } = request.params;
        Post.findById(id)
            .then(post=> {
                if(!post) {
                    return res.sendStatus(404);
                }
                post.destroy();
                res.sendStatus(204);
            });
    }
);

module.exports = router;