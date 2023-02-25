const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const express = require("express");

const app = express();

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies?.jwtoken; //get browser cookie
    if (token) {
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

      const rootUser = await User.findOne({
        _id: verifyToken._id,
        "tokens.token": token,
      });

      if (!rootUser) {
        throw new Error("User not Found");
      }

      req.token = token;
      req.rootUser = rootUser;
      req.userID = rootUser._id;

      next();
    } else {
      res.status(401).send("Token not found");
    }
  } catch (error) {
    res.status(401).send("No Token Provided");
    console.log(error);
  }
};

module.exports = Authenticate;
