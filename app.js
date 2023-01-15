import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import { getAboutPage, getAddPostPage } from "./controllers/PagesController.js";
import {
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
  getUpdatePostPage,
} from "./controllers/postsController.js";

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
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//? routes
app.get("/about", getAboutPage);
app.get("/addpost", getAddPostPage);
app.get("/", getPosts);
app.get("/posts/:id", getPostById);
// app.get("/posts/:id", (req, res) => getPostById(req, res));
app.post("/posts", addPost);
app.get("/posts/edit/:id", getUpdatePostPage);
app.put("/posts/:id", updatePost);
app.delete("/posts/:id", deletePost);


const port = 3000;
app.listen(port, () => {
  console.log(`server is started at ${port}`);
});
