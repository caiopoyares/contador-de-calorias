const { User } = require("../models/");

class AuthController {
  async create(req, res) {
    await User.create(req.body);
    res.send("User successfully created");
  }

  async signup(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    console.log("CHECKED? " + (await user.checkPassword(password)));
    res.end();
  }
}

module.exports = new AuthController();
