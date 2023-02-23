const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

//Mongodb connection
require("../server/db/conn");

//To read json responses
app.use(express.json());

// const User = require("./model/userSchema");

//Routes
app.use(require("../server/router/auth"));

//Middleware
const middleware = (req, res, next) => {
  next();
};


app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
