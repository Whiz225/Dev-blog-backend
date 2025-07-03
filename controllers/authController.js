const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");
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
    // secure: false,
    // sameSite: "Lax",
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

  if (userExists) {
    return next(new AppError("User already exists", 400));
  }

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

exports.restrictTo = (...roles) => {
  return function (req, res, next) {
    if (!roles.join(" ").includes(req.user.role))
      return next(
        new AppError("Your are not permitted to perform this action!", 403)
      );
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return next(
      new AppError("Incorrect email address! Please provide your email.", 404)
    );
  }
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetpassword/${resetToken}`;
  // const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forgot your password, please ignore this email!`;

  try {
    // await sendEmail({
    //   email: user.email,
    //   subject: 'Your password reset token (valid for 10 mins)',
    //   message,
    // });

    new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: "success",
      message: "Token sent to email",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const resetToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: resetToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user)
    return next(new AppError("No user! or The Token has expired!", 404));

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetExpires = undefined;
  user.passwordResetToken = undefined;
  await user.save({ validateBeforeSave: false });

  creatSendToken(user, 201, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const { password, newPassword, newPasswordConfirm } = req.body;
  if (!password || !newPassword || !newPasswordConfirm)
    return next(new AppError("Please provide your details.", 400));

  const user = await User.findById(req.user._id).select("+password");
  if (!user) return next(new AppError("No user found", 404));

  if (!(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect password! Please try again.", 404));
  }
  user.password = newPassword;
  user.passwordConfirm = newPasswordConfirm;
  await user.save();

  creatSendToken(user, 201, res);
});
