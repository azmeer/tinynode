
const router = require('express').Router();

router.route('/')
    .get((req, res) => res.send(200, 'pong!'));

module.exports = router;
