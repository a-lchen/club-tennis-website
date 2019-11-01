const express = require("express");
const {TEST_USER, TEST_DATA} = require("./testdata")
const { getIntersects } = require("./utils")
const app = express();
const port = process.env.PORT || 3000;

app.use("/static", express.static("public"));

app.get("/", function(req, res, next) {
  res.sendFile("index.html", { root: "src/views" });
});

app.get("/members", function(req, res, next) {
  res.sendFile("members.html", { root: "src/views" });
});

app.get("/about", function(req, res, next) {
  res.sendFile("about.html", { root: "src/views" });
});

app.get("/ladder", function(req, res, next) {
  res.sendFile("ladder.html", { root: "src/views" });
});

app.get("/create", function(req, res, next) {
  res.sendFile("createProfile.html", { root: "src/views" });
});

app.get("/login", function(req, res, next) {
  res.sendFile("login.html", { root: "src/views" });
});

app.get("/profile", function(req, res, next) {
  res.sendFile("profile.html", { root: "src/views" });
});

app.get("/api/ladder", function(req, res, next) {
  res.send(getIntersects(TEST_USER, TEST_DATA));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
