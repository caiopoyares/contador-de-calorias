const { User } = require("../models/");

class AuthController {
  async create(req, res) {
    const { name: username, email, password } = req.body;
    console.log(req.body.email);
    if (username && email && password) {
      await User.create({ username, email, password });
      res.send("User successfully created");
    } else {
      res.send("Invalid user");
    }
  }

  async signup(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    console.log("CHECKED? " + (await user.checkPassword(password)));
    res.end();
  }
}

module.exports = new AuthController();
