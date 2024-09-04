const router = require('express').Router();

const sale = require('../controllers/sales');
const { isActive, isAdmin, isStaff, isLogin } = require('../middlewares/permission');

// router.route('/')
//     .get(isLogin,isAdmin,isActive, sale.list)
//     .post(isLogin,sale.create);

// router.route('/:id')
//     .get(isStaff,sale.read)
//     .put(isAdmin,sale.update)
//     .delete(isAdmin, sale.delete);


router.route('/')
    .get(sale.list)
    .post(sale.create);

router.route('/:id')
    .get(sale.read)
    .put(sale.update)
    .delete(sale.delete);



module.exports = router;