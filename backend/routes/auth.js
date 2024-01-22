const express = require("express");
const { signup, login, logout } = require("../controllers/auth");
const authPolicy = require("../middleware/auth");

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/signup", authPolicy, logout);

module.exports = authRouter;
