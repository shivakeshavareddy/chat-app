const express = require("express");

const router = express.Router();

const userController = require("../controller/userController");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/addfriend",userController.addFriend);
router.post("/getFriends",userController.getFriends)

module.exports = router;
