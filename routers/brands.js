const router = require('express').Router();


const brand = require('../controllers/brands');


router.route('/')
    .get(brand.list)
    .post(brand.create);

router.route('/:id')
    .get(brand.read)
    .put(brand.update)
    .delete(brand.delete);


module.exports = router;