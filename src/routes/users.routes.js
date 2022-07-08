const { Router } = require("express");
const { check } = require("express-validator");
const {loginUser,createUser} = require("../controllers/login.controller");
const {validateRequest} =  require('../middlewares/validateRequest');

const router = Router();

router.post("/api/login",loginUser);
router.post('/api/createUser', 
            [
                check('username','missing name user').not().isEmpty(),
                check('password','min length password is 3').isLength( {min : 3}),
                check('firstname','missing first name').not().isEmpty(),
                check('email','email is invalid').isEmail(),
                check('phone','format phone is incorrect').isInt().isLength( {min : 7}),
                check('rol','format phone is incorrect').isIn(['admin','customer']),

                validateRequest
            ],
            createUser);

module.exports = router;
