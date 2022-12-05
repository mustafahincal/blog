import express from "express";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
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

const port = 3000;
app.listen(port, () => {
  console.log(`server is started at ${port}`);
});
