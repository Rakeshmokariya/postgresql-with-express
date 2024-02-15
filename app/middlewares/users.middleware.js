const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const env = process.env;

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Token not provided" });
  }

  jwt.verify(token, env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Unauthorized: Invalid token" });
    }

    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
