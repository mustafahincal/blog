import express from "express";

const app = express();

app.get("/", (req, res) => {
  const message = {
    id: 1,
    name: "Mustafa",
    age: 20,
  };
  res.send(message);
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is started at ${port}`);
});
