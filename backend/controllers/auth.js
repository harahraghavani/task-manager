const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const SECERT_KEY = require("../constants");

const signup = async (req, res) => {
  try {
    const signupData = req.body;
    if (!signupData.name || !signupData.email || !signupData.password) {
      return res.json({
        status: 400,
        data: {},
        error: "Name, email and password are required",
      });
    }

    const isUserExist = await User.findOne({ email: signupData.email });

    if (isUserExist) {
      return res.json({
        status: 404,
        data: {},
        error: "User already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(signupData.password, 10);

    const user = new User({
      name: signupData.name,
      email: signupData.email,
      password: hashedPassword,
    });

    await user.save();

    const response = {
      id: user._id,
      name: user.name,
      email: user.email,
    }

    return res.json({
      status: 200,
      data: response,
      message: "Signup successful",
    });
  } catch (error) {
    return res.json({
      status: 500,
      data: {},
      error: "Error while signing up",
    });
  }
};

const login = async (req, res) => {
  try {
    const loginData = req.body;

    if (!loginData.name || !loginData.email || !loginData.password) {
      return res.json({
        status: 400,
        data: {},
        error: "Name, email and password are required",
      });
    }

    const isUserExist = await User.findOne({ email: loginData.email })

    if (!isUserExist) {
      return res.json({
        status: 404,
        data: {},
        error: "User not found",
      });
    }

    const checkPassword = await bcrypt.compare(
      loginData.password,
      isUserExist.password
    );

    if (!checkPassword) {
      return res.json({
        status: 404,
        data: {},
        error: "Password is incorrect",
      });
    }

    const token = jwt.sign(
      {
        _id: isUserExist.id,
        email: isUserExist.email,
      },
      "secret"
    );


    // adding token key in object
    isUserExist.authToken = token;
    await isUserExist.save();

    const response = {
      id: isUserExist._id,
      name: isUserExist.name,
      email: isUserExist.email,
      authToken: isUserExist.authToken
    }

    return res.json({
      status: 200,
      data: response,
      message: "Login successful",
    });
  } catch (error) {
    return res.json({
      status: 500,
      data: {},
      error: "Error while login",
    });
  }
};

const logout = async (req, res) => {
  try {
    const userId = req.me._id;
    const findUser = await User.findById(userId);
    console.log('findUser: ', findUser);

    if (!findUser) {
      return res.json({
        status: 404,
        data: {},
        error: "User not found",
      });
    }
    const updatedUser = await User.updateOne({ authToken: findUser.authToken }, { $set: { authToken: "" } });

    return res.json({
      status: 200,
      data: updatedUser,
      message: "Logout successful",
    });
  } catch (error) {
    return res.json({
      status: 500,
      data: {},
      error: "Error while logout",
    });
  }
};

module.exports = {
  signup,
  login,
  logout,
};
