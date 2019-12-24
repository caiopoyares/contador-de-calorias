const express = require("express");
const router = express.Router();

const AuthController = require("./app/controllers/AuthController.js");
const AuthMiddleware = require("./app/middlewares/auth");

// HOME CONTROLLER

//AUTH CONTROLLERS
router.post("/register", AuthController.create);
router.post("/login", AuthController.signup);

// AUTH MIDDLEWARE
router.use(AuthMiddleware);

// FROM NOW ON, ALL ROUTES MUST PROVIDED A VALID TOKEN
router.get("/test", (req, res) => {
  return res.json({ userId: req.userId });
});

module.exports = router;
