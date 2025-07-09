// controllers/userController.js

const User = require("../models/User.js");
const catchAsync = require("../utils/catchAsync.js");
const factoryController = require("./factoryController.js");

exports.getAllUsers = factoryController.getAll(User);
exports.getUser = factoryController.getOne(User);
exports.deleteUser = factoryController.deleteOne(User);

const reqObj = (obj, options) => {
  const x = options.join(" ");
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (x.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm)
    return next(
      new AppError(
        "This route is not for password update. Please use the updatePassword button",
        400
      )
    );
  const filteredObj = reqObj(req.body, ["username", "email"]);
  if (req.file) filteredObj.avatar = req.file.filename;

  const updatedUser = await User.findOneAndUpdate(
    { _id: req.user._id },
    filteredObj,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { active: false },
    { new: true, runValidators: true }
  );

  res.status(204).json({
    status: "success",
    data: null,
  });
});
