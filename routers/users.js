const router = require('express').Router();
const  user = require('../controllers/users');
const { isActive, isAdmin, isStaff, isLogin } = require('../middlewares/permission');

// router.route('/')
//     .get(isLogin, isAdmin, user.list)
//     .post(user.create);

// router.route('/:id')
//     .get(isLogin, isAdmin,user.read)
//     .put(isActive, isLogin,user.update)
//     .delete(isLogin, isAdmin,user.delete);

router.route('/')
    .get(user.list)
    .post(user.create);


router.route('/:id')
    .get(user.read)
    .put(user.update)
    .delete(user.delete);

module.exports = router;