const express = require("express");
const dotenv = require("dotenv");
const app = express();
var cookies = require("cookie-parser");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

//Mongodb connection
require("../server/db/conn");

//To read json responses
app.use(express.json());

// const User = require("./model/userSchema");

//To read Cookied
app.use(cookies());

//Routes
app.use(require("../server/router/auth"));

app.get("/", (req, res) => {
  res.send("Hello woorld");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
