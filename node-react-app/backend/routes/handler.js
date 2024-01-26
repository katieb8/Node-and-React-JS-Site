const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [
        {
            "name": "katie",
            "msg": "this is my first tweet",
            "username": "KB"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('not implemented yet');
});

module.exports = router;