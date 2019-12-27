const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({ error: "Token not provided." });
  }
  const authHeader = req.headers.authorization;
  const [, token] = authHeader.split(" ");

  jwt.verify(token, authConfig.secret, function(err, decoded) {
    if (err) {
      return res.json({ error: "Invalid Token" });
    }
    req.userId = decoded.id;
  });

  return next();
};
