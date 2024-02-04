const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
