const { User } = require("../models/");

class AuthController {
  register(req, res) {
    return res.render("register");
  }

  async create(req, res) {
    await User.create(req.body);
    res.send("User successfully created");
  }

  login(req, res) {
    return res.render("login");
  }

  async signup(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    console.log("CHECKED? " + (await user.checkPassword(password)));
    res.end();
  }
}

module.exports = new AuthController();
