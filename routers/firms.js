const router = require('express').Router();

const firm = require('../controllers/firms');
const { isActive, isAdmin, isStaff, isLogin } = require('../middlewares/permission');


// router.route('/')
//     .get(isLogin, isActive, firm.list)
//     .post(firm.create);

// router.route('/:id')
//     .get(isStaff,firm.read)
//     .put(isStaff,firm.update)
//     .delete(isAdmin,firm.delete);

router.route('/')
    .get(firm.list)
    .post(firm.create);

router.route('/:id')
    .get(firm.read)
    .put(firm.update)
    .delete(firm.delete);


module.exports = router;