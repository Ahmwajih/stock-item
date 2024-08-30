const router = require('express').Router();
const Doc = require('./doc')


router.get('/' , (req, res) => {
    res.status(200).send({
        error: false,
        message: 'Welcome to the API'
    });});

router.use('/users', require('./users'));
router.use('/auth', require('./auth'));
router.use('/products', require('./products'));
router.use('/categories', require('./categories'));
router.use('/firms', require('./firms'));
router.use('/purchases', require('./purchases'));
router.use('/sales', require('./sales'));
router.use('/brands', require('./brands'));
router.use('/doc', Doc)
router.use('/', require('./token'))





module.exports = router;