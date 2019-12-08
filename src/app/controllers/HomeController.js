const model = require("../models/");

class HomeController {
  index(req, res) {
    return res.render("Home", { name: "Caio" });
  }
}

module.exports = new HomeController();
