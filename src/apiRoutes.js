const express = require("express");
const router = express.Router();

// MIDDLEWARES
const AuthMiddleware = require("./app/middlewares/auth");

// CONTROLLERS
const AuthController = require("./app/controllers/AuthController.js");

//AUTH CONTROLLERS
router.post("/register", AuthController.create);
router.post("/login", AuthController.signup);

// AUTH MIDDLEWARE
router.use(AuthMiddleware);

// FROM NOW ON, ALL ROUTES MUST PROVIDED A VALID TOKEN
router.get("/validate", AuthController.isAuthenticated);

router.get("/test", (req, res) => {
  return res.json({ userId: req.userId });
});

module.exports = router;
