const router = require('express').Router();

const category = require('../controllers/categories');


router.route('/')
    .get(category.list)
    .post(category.create);

router.route('/:id')
    .get(category.read)
    .put(category.update)
    .delete(category.delete);


module.exports = router;