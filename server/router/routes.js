const express = require("express");
const User = require("./../models/userSchema");

const userController = require("./../controller/userController");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;
