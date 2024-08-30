const router = require('express').Router();


const brand = require('../controllers/brands');

const { isActive, isAdmin, isStaff, isLogin } = require('../middlewares/permission');


router.route('/')
    .get(isLogin, isActive, brand.list)
    .post(isStaff, brand.create);

router.route('/:id')
    .get(isLogin,brand.read)
    .put(isStaff,brand.update)
    .delete(isAdmin,brand.delete);


module.exports = router;