const express = require("express");
const router = express.Router();

const AuthController = require("./app/controllers/AuthController.js");

// HOME CONTROLLER

//AUTH CONTROLLERS
router.get("/test", AuthController.getName);
router.post("/register", AuthController.create);
router.post("/login", AuthController.signup);

module.exports = router;
