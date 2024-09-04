const router = require('express').Router();

const purchase = require('../controllers/purchases');
const { isActive, isAdmin, isStaff, isLogin } = require('../middlewares/permission');


// router.route('/')
//     .get(isLogin, isAdmin, purchase.list)
//     .post(isLogin,isActive, purchase.create);

// router.route('/:id')
//     .get(isStaff, isLogin,isActive, purchase.read)
//     .put(isAdmin, purchase.update)
//     .delete(isAdmin, purchase.delete);


router.route('/')
    .get(purchase.list)
    .post(purchase.create);

router.route('/:id')
    .get(purchase.read)
    .put(purchase.update)
    .delete(purchase.delete);




module.exports = router;
