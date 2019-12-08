const { User } = require("../models/");

class AuthController {
  register(req, res) {
    return res.render("register");
  }

  async create(req, res) {
    console.log(req.body);
    await User.create(req.body);
    res.send("User successfully created");
  }

  login(req, res) {
    return res.render("login");
  }
}

module.exports = new AuthController();
