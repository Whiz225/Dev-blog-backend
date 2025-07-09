// routes/postRoutes.js
const express = require("express");
const router = express.Router();
const { validateObjectId } = require("../utils/validateObjectId");
const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getMyPosts,
} = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");

// Public routes
router.route("/allPosts").get(getAllPosts);
router.route("/allPosts/:id").get(validateObjectId("id"), getPost);

// Protected routes
router.use(protect);

router
  .route("/author")
  .get(getMyPosts) // GET /api/posts/author - Get my posts
  .post(createPost); // POST /api/posts/author - Create new post

router
  .route("/author/:id")
  .patch(validateObjectId("id"), updatePost) // PUT /api/posts/:id - Update post
  .delete(validateObjectId("id"), deletePost); // DELETE /api/posts/:id - Delete post

module.exports = router;
