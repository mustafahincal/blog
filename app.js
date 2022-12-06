import express from "express";
import mongoose from "mongoose";
import Post from "./models/Post.js";

const app = express();

//? template engine
app.set("view engine", "ejs");

//? connect db
mongoose.connect("mongodb://localhost/clean-blog-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//? middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//? routes
app.get("/", async (req, res) => {
  const posts = await Post.find();
  res.render("index", {
    posts,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/post", (req, res) => {
  res.render("post");
});
app.get("/addpost", (req, res) => {
  res.render("add_post");
});

app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is started at ${port}`);
});
