// routes/userRoutes.js

const express = require("express");
const userController = require("../controllers/userController");
const { validateObjectId } = require("../utils/validateObjectId");
const { protect, getMe } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);

router.route("/me").get(getMe, userController.getUser);
router.patch("/updateMyData", userController.updateMe);
router.delete("/deleteMe", userController.deleteMe);
router.route("/").get(userController.getAllUsers);

router
  .route("/:id")
  .get(validateObjectId("id"), userController.getUser)
  .delete(validateObjectId("id"), userController.deleteUser);

module.exports = router;
