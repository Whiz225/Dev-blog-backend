// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
// const asyncHandler = require("express-async-handler");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");
const Post = require("../models/Post");
const AppError = require("../utils/AppError");

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.protect = catchAsync(async (req, res, next) => {
  // console.log("AAA", req.params.token);
  // console.log("headers", req.headers);
  // 1) getting token and check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.jwt || req.params?.token) {
    token = req.cookies?.jwt || req.params?.token;
  }

  if (!token)
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  // 2) verification of token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // 3) check if user still exists
  const user = await User.findById(decoded.id);
  if (!user)
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        404
      )
    );
  // 4) check if user changed password after the JWT token was issued
  if (user.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again", 404)
    );
  }

  if (req.params?.token) {
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  }

  res.locals.user = user;
  req.user = user;

  next();
});

exports.checkPostOwnership = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  // Check if user is post author
  if (post.author.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  next();
});

// const protect = asyncHandler(async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(" ")[1];

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Get user from token
//       req.user = await User.findById(decoded.id).select("-password");

//       next();
//     } catch (error) {
//       console.error(error);
//       res.status(401);
//       throw new Error("Not authorized");
//     }
//   }

//   if (!token) {
//     res.status(401);
//     throw new Error("Not authorized, no token");
//   }
// });
