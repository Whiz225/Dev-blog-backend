const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const { validateObjectId } = require("../utils/validateObjectId");
const { protect, getMe } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);
// router.get("/me", getMe);
router.route("/me").get(getMe, userController.getUser);

router.patch(
  "/updateMyData",
  // authController.restrictTo("user", "admin"),
  //   userController.uploadUserPhoto,
  //   userController.resizeUserPhoto,
  userController.updateMe
);

router.delete(
  "/deleteMe",
  authController.restrictTo("user"),
  userController.deleteMe
);

router.route("/").get(userController.getAllUsers);
//   .post(userController.createUser);

router
  .route("/:id")
  .get(validateObjectId("id"), userController.getUser)
  // .patch(
  //   validateObjectId("id"),
  //   authController.restrictTo("user"),
  //   userController.updateUser
  // )
  .delete(
    validateObjectId("id"),
    authController.restrictTo("admin"),
    userController.deleteUser
  );

module.exports = router;

