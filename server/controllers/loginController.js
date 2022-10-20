import express from "express";
import { User } from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt, { decode } from "jsonwebtoken";

export const registerUser = async (req, res) => {
  // console.log(req.body)
  try {
    console.log("Creating user");
    const pass = await bcrypt.hash(req.body.password, 10); //Asynchronously generates a hash for the given string.
    const user = await User.create({
      name: req.body.name,
      rollNo: req.body.rollNo,
      password: pass,
    });
    const user_data = await user.save();
    res.status(200).json(user_data);
    console.log("user created");
  } catch (error) {
    res.status(401).json("duplicate roll NO");
  }
};

// <---------->

export const findUser = async (req, res) => {
  // console.log(req.body)
  try {
    console.log("Finding user");
    const user_data = await User.findOne({ rollNo: req.body.rollNo });
    console.log(user_data);
    if (user_data === null) {
      res.status(401).json("User is not present");
      return;
    }
    // const pass = req.body.password === user_data.password;
    const pass = bcrypt.compare(req.body.password, user_data.password);

    if (pass) {
      // const token = jwt.sign(
      //   { name: user.name, userName: user.username },
      //   "Praumasnsuni#5"
      // );
      const token = jwt.sign(
        { name: user_data.name, rollno: user_data.rollNo },
        "Praumasnsuni#5"
      );
      res.status(200).json(user_data);
      console.log("user found");
    } else {
      res.status(401).json("Password incorrect");
      return;
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

//   app.post("/login", async (req, res) => {
//     // console.log(req.body)
//     // req = {username:"shiva@gmail.com",password:"umapathi"}
//     const user = await User.findOne({
//       username: req.body.userName,
//     });
//     if (!user) {
//       return { status: "error", error: "Invalid login" };
//     }
//     const pass = bcrypt.compare(req.body.password, user.password);

//     if (pass) {
//       const token = jwt.sign(
//         { name: user.name, userName: user.username },
//         "Praumasnsuni#5"
//       );
//       // res.statusMessage("you are authorized welcome onboard:)") for text/html header
//       // res.sendStatus(200)
//       // res.status(200).send("you are authorized welcome")
//       res.json({ status: "ok", user: token }); //for browser response is sent through login.js (data)

//       // return res.json({staus:'ok',user:token})
//     } else {
//       // res.status(401).send("Enter correct credentials");
//       res.json({ status: "error", user: false });
//       return;
//     }
//     // user.save();
//   });
//   app.post("/quote", async (req, res) => {
//     try {
//       const tok = req.headers["x-access-token"];
//       const decoded = jwt.verify(tok, "Praumasnsuni#5");
//       const username = decoded.userName;
//       const quote = req.body.quote;
//       // const username = req.body.username;
//       await User.updateOne({ username: username }, { $set: { quote: quote } });
//       res.json({ status: "ok" });
//     } catch (error) {
//       console.log("This is error", error);
//       res.json({ status: "error", error: "invalid Token" });
//     }
//   });
