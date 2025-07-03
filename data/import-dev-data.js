const dotenv = require("dotenv");
const mongoose = require("mongoose");
const blogPosts = require("./post-data");
const Post = require("../models/Post");
const users = require("./user-data");
const User = require("../models/User");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connected...");
    // console.log(console.log(con.connections));
  });

const importData = async () => {
  try {
    await Post.create(blogPosts, { validateBeforeSave: false });
    // await User.create(users, { validateBeforeSave: false });

    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
};

const deleteData = async () => {
  try {
    await Post.deleteMany();
    // await User.deleteMany();

    console.log("Data successfully deleted");
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
