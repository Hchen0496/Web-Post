const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        title: 'GamerSweet',
        description: 'Social Media forum for gamers.',
    });
});

module.exports = router;