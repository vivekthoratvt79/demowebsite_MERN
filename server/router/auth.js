const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello woorld");
});
router.get("/contact", (req, res) => {
  res.send("Coontact Page");
});
router.get("/about", (req, res) => {
  res.send("About page");
});
router.get("/signin", (req, res) => {
  res.send("signin Page");
});
router.get("/signup", (req, res) => {
  res.send("Signup");
});
//-------------------------------------USING PROMISES----------------------------------------
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "All fields are mandatory" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email is already registered" });
//       }
//       const user = new User({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         cpassword,
//       });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "Registration Successful" });
//         })
//         .catch((err) =>
//           res.status(500).json({ error: "Registration failed", message: err })
//         );
//     })
//     .catch((err) => console.log(err));
// });

//------------------------------------USING ASYNC AWAIT--------------------------------------
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "All fields are mandatory" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email is already registered" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Password does not match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      // password hashed here via bcryptjs ---- filename = userSchema.js
      await user.save();
      res.status(201).json({ message: "Registration Successful" });
    }
  } catch (error) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "Enter login details" });
    }
    const userData = await User.findOne({ email: email });
    if (!userData) {
      return res.status(422).json({ error: "EmailID is not registered" });
    }
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return res.status(422).json({ error: "Credentials did not match" });
    }
    const token = await userData.generateAuthToken();
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 2589200000),
      httpOnly: true,
    });
    res.status(201).json({ message: "Login Successful", userData });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;