const express = require("express");
const router = express.Router();
const ApiRoutes = require("./apiRoutes.js");

//API ROUTES
router.get("/api", (req, res) =>
  res.json({ name: "Caio", surname: "Poyares" })
);

// SEND REACT APP
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build"));
});

module.exports = router;
