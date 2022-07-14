const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  postTitle: { type: String, requred: true },
  postBody: { type: String, requred: true },
  subreddit: { type: String, requred: true },
  postImage: { type: String, requred: true },
  // owner: {
  //   type: String,
  //   ref: "User",
  // },
  // ownerId: {
  //   type: String,
  // },
});

module.exports = mongoose.model("Post", Post);
