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
    if (user) {
      const allowed = await user.checkPassword(password);
      console.log(user.username, user.email);
      res.json({ allowed, username: user.username, email: user.email });
    } else {
      res.json({ allowed: false });
    }
  }

  getName(req, res) {
    console.log(req.cookies.name);
  }
}

module.exports = new AuthController();
