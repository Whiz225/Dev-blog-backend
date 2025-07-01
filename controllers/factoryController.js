// controllers/factoryController.js
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.deleteOne = (model) =>
  catchAsync(async (req, res, next) => {
    const doc = await model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with this ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.createOne = (model) =>
  catchAsync(async (req, res, next) => {
    // Automatically set author if user is authenticated
    if (req.user?._id) {
      req.body.author = req.user._id;
    }

    const doc = await model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.updateOne = (model) =>
  catchAsync(async (req, res, next) => {
    const doc = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError("No document found with this ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with this ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getAll = (model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = model.find();

    if (popOptions) {
      query = query.populate(popOptions);
    }

    const docs = await query;

    res.status(200).json({
      status: "success",
      results: docs.length,
      data: {
        data: docs,
      },
    });
  });
