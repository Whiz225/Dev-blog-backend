// controllers/postController.js
const Post = require("../models/Post");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const { getAll, getOne, createOne } = require("./factoryController");

// @desc    Get all posts
// @route   GET /api/posts/all
// @access  Public
const getAllPosts = getAll(Post, { path: "author", select: "username email" });

// @desc    Get my posts
// @route   GET /api/posts/author
// @access  Private
const getMyPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find({ author: req.user._id }).populate({
    path: "author",
    select: "username email",
  });

  res.status(200).json({
    status: "success",
    results: posts.length,
    data: {
      posts,
    },
  });
});

// @desc    Get single post
// @route   GET /api/posts/:id
// @access  Public
const getPost = getOne(Post, { path: "author", select: "username email" });

// @desc    Create new post
// @route   POST /api/posts/author
// @access  Private
const createPost = createOne(Post);

// @desc    Update post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = catchAsync(async (req, res, next) => {
  const { title, content } = req.body;

  if (!title && !content) {
    return next(
      new AppError("Please provide at least one field to update", 400)
    );
  }

  const updatedPost = await Post.findOneAndUpdate(
    { _id: req.params.id, author: req.user._id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedPost) {
    return next(new AppError("Post not found or not authorized", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      post: updatedPost,
    },
  });
});

// @desc    Delete post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = catchAsync(async (req, res, next) => {
  const post = await Post.findOneAndDelete({
    _id: req.params.id,
    author: req.user._id,
  });

  if (!post) {
    return next(new AppError("Post not found or not authorized", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getMyPosts,
};
