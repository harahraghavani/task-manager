const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const SECERT_KEY = require("../constants");

const signup = async (req, res) => {
  try {
    const signupData = req.body;
    if (!signupData.name) {
      return res.json({
        status: 400,
        data: {},
        error: "Name is required",
      });
    }
    if (!signupData.email) {
      return res.json({
        status: 400,
        data: {},
        error: "Email is required",
      });
    }
    if (!signupData.password) {
      return res.json({
        status: 400,
        data: {},
        error: "Password is required",
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
    return res.json({
      status: 200,
      data: user,
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
    console.log("loginData: ", loginData);

    // if (!loginData.name) {
    //   return res.json({
    //     status: 400,
    //     data: {},
    //     error: "Name is required",
    //   });
    // }
    // if (!loginData.email) {
    //   return res.json({
    //     status: 400,
    //     data: {},
    //     error: "Email is required",
    //   });
    // }
    // if (!loginData.password) {
    //   return res.json({
    //     status: 400,
    //     data: {},
    //     error: "Password is required",
    //   });
    // }

    const isUserExist = await User.findOne({ email: loginData.email });
    console.log("isUserExist: ", isUserExist);

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
    console.log("token: ", token);

    // adding token key in object
    isUserExist.token = token;
    await isUserExist.save();
    return res.json({
      status: 200,
      data: isUserExist,
      message: "Login successful",
    });
  } catch (error) {
    console.log("error: ", error);
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

    if (!findUser) {
      return res.json({
        status: 404,
        data: {},
        error: "User not found",
      });
    }
    // await User.updateOne({ _id: userId }, { $set: { token: null } });
    await User.updateOne(
      {
        _id: userId,
      },
      {
        token: "",
      }
    );
    return res.json({
      status: 200,
      data: {},
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
