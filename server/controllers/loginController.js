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
    res.status(401).json({ message: "duplicate roll NO" });
    return;
  }
};

// <---------->

export const findUser = async (req, res) => {
  // console.log(req.body)
  try {
    console.log("Finding user");
    const user_data = await User.findOne({ rollNo: req.body.rollNo });
    console.log("Finding user12");
    console.log(user_data);
    if (user_data === null) {
      res.status(401).json({ message: "User is not present" });
      res.end();
      // return
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
      console.log(user_data);
      console.log("user found");
    } else {
      res.status(401).json({ message: "Password incorrect" });
      return;
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
