import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;

// Post.create({
//   title: "Post Title 1",
//   detail: "Post Detail 1",
// });
