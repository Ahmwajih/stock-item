const router = require('express').Router();
const  user = require('../controllers/users');
const { isActive, isAdmin, isStaff, isLogin } = require('../middlewares/permission');

router.route('/')
    .get(isLogin, isAdmin, user.list)
    .post(isLogin, user.create);

router.route('/:id')
    .get(isLogin, isAdmin,user.read)
    .put(isActive, isLogin,user.update)
    .delete(isLogin, isAdmin,user.delete);

module.exports = router;