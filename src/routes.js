const express = require("express");
const router = express.Router();
const HomeController = require("./app/controllers/HomeController.js");
const AuthController = require("./app/controllers/AuthController.js");

// HOME CONTROLLER
router.get("/", HomeController.index);

// AUTH CONTROLLER
router.get("/register", AuthController.register);
router.post("/register", AuthController.create);
router.get("/login", AuthController.login);

module.exports = router;
