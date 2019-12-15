const express = require("express");
const router = express.Router();

const AuthController = require("./app/controllers/AuthController.js");

router.get("/register", AuthController.register);
router.post("/register", AuthController.create);
router.get("/login", AuthController.login);
router.post("/login", AuthController.signup);

module.exports = router;
