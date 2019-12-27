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
    if (!user) {
      res.json({ allowed: false });
    }

    if (await user.checkPassword(password)) {
      const { username, email } = user;
      const token = user.generateToken(user.user_id);
      res.json({ username, email, token });
    }
  }

  async isAuthenticated(req, res) {
    if (req.userId) return res.json({ authenticated: true });

    return res.json({ error: "user not authenticated. Invalid token." });
  }
}

module.exports = new AuthController();
