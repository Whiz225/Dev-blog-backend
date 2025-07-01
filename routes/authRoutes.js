// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  logOutUser,
  forgotPassword,
  resetPassword,
  updatePassword,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logOutUser);

router.post("/forgotpassword", forgotPassword);
router.patch("/resetpassword/:token", resetPassword);
router.post("/middleware/:token", protect);

module.exports = router;
