const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/auth/signup", userCtrl.signup);
router.post("/auth/login", userCtrl.login);

module.exports = router;
