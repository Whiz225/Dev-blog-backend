// controllers/authController.js

const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: `${process.env.JWT_EXPIRES_IN + 1 * 10 * 1000}`,
  });
};

const creatSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    path: "/",
    domain:
      process.env.NODE_ENV === "production" ? ".yourdomain.com" : undefined,
  };

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
exports.registerUser = catchAsync(async (req, res, next) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return next(new AppError("Please add all required fields", 400));
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  // Create user
  const newUser = await User.create({
    username,
    password,
    email,
  });

  if (!newUser) {
    return next(new AppError("Something went wrong while creating user", 404));
  }

  if (newUser) creatSendToken(newUser, 201, res);
});

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = catchAsync(async (req, res, next) => {
  console.log("execute");
  const { username, password } = req.body;
  if (!username || !password)
    return next(new AppError("Please provide your username and password"), 400);
  // Check for user
  const user = await User.findOne({ username }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError("Incorrect username or password", 404));

  creatSendToken(user, 200, res);
});

exports.logOutUser = catchAsync(async (req, res, next) => {
  res.cookie("jwt", "Logged out", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
  });
});

