import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  const page = req.query.page || 1;
  const postsPerPage = 2;
  const postsCount = await Post.find().countDocuments();

  const posts = await Post.find()
    .sort("-dateCreated")
    .skip((page - 1) * postsPerPage)
    .limit(postsPerPage);

  res.render("posts", {
    posts,
    currentPage: page,
    pages: Math.ceil(postsCount / postsPerPage),
  });
};

export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
};

export const addPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

export const updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();
  res.redirect(`/posts/${req.params.id}`);
};
export const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

export const getUpdatePostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("edit", {
    post,
  });
};
