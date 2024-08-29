const router = require('express').Router();

const sale = require('../controllers/sales');

router.route('/')
    .get(sale.list)
    .post(sale.create);

router.route('/:id')
    .get(sale.read)
    .put(sale.update)
    .delete(sale.delete);


module.exports = router;