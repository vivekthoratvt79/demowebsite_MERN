const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello woorld");
});
app.get("/contact", (req, res) => {
  res.send("Coontact Page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/signin", (req, res) => {
  res.send("signin Page");
});
app.get("/signup", (req, res) => {
  res.send("Signup");
});
app.listen(3080, () => {
  console.log(`Server is running at port 3000`);
});
