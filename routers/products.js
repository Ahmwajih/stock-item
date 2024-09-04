const router = require('express').Router();

const product = require('../controllers/products');
const { isActive, isAdmin, isStaff, isLogin } = require('../middlewares/permission');


// router.route('/')
//     .get(product.list)
//     .post(isLogin,isActive, product.create);


// router.route('/:id')
//     .get(isStaff, product.read)
//     .put(isAdmin, product.update)
//     .delete(isAdmin, product.delete);

router.route('/')
    .get(product.list)
    .post(product.create);

router.route('/:id')
    .get(product.read)
    .put(product.update)
    .delete(product.delete);



module.exports = router;