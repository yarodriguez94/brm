const { Router } = require("express");
const {loginUser,createUser} = require("../controllers/login.controller");

const router = Router();

router.post("/", loginUser);
// router.post('/', createUser)

module.exports = router;
