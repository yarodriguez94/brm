const { Router } = require("express");
const {loginUser,createUser} = require("../controllers/login.controller");

const router = Router();

router.post("/api/login",loginUser);
router.post('/api/createUser', createUser);

module.exports = router;
