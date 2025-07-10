// models/Post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Pls include your title"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Pls include your contnet"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Your post must have an author"],
    },
    image: String,
    category: String,
    readTime: String,
    slug: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Recreate updatedAt before saving if there's any filed update
postSchema.pre("save", function (next) {
  if (!this.isModified()) return next();
  this.updatedAt = new Date();
  next();
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
