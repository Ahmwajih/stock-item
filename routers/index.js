const router = require('express').Router();
const Doc = require('./doc');

router.get('/', (req, res) => {
    res.status(200).send({
        error: false,
        message: 'Welcome to the API'
    });
});

router.use('/account/users', require('./users'));
router.use('/account/auth', require('./auth'));
router.use('/stock/products', require('./products'));
router.use('/stock/categories', require('./categories'));
router.use('/stock/firms', require('./firms'));
router.use('/stock/purchases', require('./purchases'));
router.use('/stock/sales', require('./sales'));
router.use('/stock/brands', require('./brands'));
router.use('/doc', Doc);

module.exports = router;