const router = require('express').Router();

const token = require('../controllers/token');


router.route('/')
    .get(token.list)
    .post(token.create);

router.route('/:id')
    .get(token.read)
    .put(token.update)
    .delete(token.delete);


module.exports = router;