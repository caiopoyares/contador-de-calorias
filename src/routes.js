const express = require("express");
const router = express.Router();
const ApiRoutes = require("./apiRoutes.js");

//API ROUTES
router.get("/api", ApiRoutes);

// SEND REACT APP
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build"));
});

module.exports = router;
