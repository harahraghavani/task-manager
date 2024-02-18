const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { SECERT_KEY } = require("../constants");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
      return res.status(403).json({
        message: "unauthorized user",
      });
    }
    const decodedToken = jwt.verify(token, "secret");
    const userId = decodedToken._id;
    const email = decodedToken.email;

    if (!userId || !email) {
      return res.status(403).json({
        message: "unauthorized user",
      });
    } else {
      const findUser = await User.findById(userId);

      if (!findUser) {
        return res.status(400).json({
          message: "User not found",
        });
      }

      req.me = decodedToken;

      return next();
    }
  } catch (err) {
    return res.status(401).json({
      error: "Auth token is missing",
    });
  }
};
