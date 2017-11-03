
const router = require('express').Router();

router.route('/')
    .get((req, res) => res.send(200, 'accessing users route'));

module.exports = router;
