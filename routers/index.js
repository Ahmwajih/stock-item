const router = require('express').Router();


router.get('/' , (req, res) => {
    res.status(200).send({
        error: false,
        message: 'Welcome to the API'
    });});

router.use('/users', require('./users'));
router.use('/auth', require('./auth'));

module.exports = router;