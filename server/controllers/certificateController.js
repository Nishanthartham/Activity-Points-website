import express from "express";
import { Hackathon } from "../models/hackathonSchema.js";
import { Internship } from "../models/hackathonSchema.js";
import { course_eight } from "../models/hackathonSchema.js";
import { course_tweleve } from "../models/hackathonSchema.js";
import bcrypt from "bcryptjs";
import jwt, { decode } from "jsonwebtoken";

const username = "fsd"; //fetch from localstorage
// const username = localStorage.getItem("userId");

export const addHackathon = async (req, res) => {
  try {
    console.log("Adding certificate");
    let present = await Hackathon.findOne({ username: username });
    // console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const hack_data = present.name;
      // console.log(...hack_data);
      // console.log(hack_data + "prev hackathon certificates from backend ");
      // console.log(req.body.name + " hackathon certificates from backend ");
      const certificate = await Hackathon.updateOne(
        {
          username: username,
        },
        {
          $set: {
            username: username,
            name: [...hack_data, req.body.name],
          },
        },
        { new: true }
      );
      // const save_certificate_data = await certificate.save();
      // const filter = { username: username };
      // const update = { name: [...hack_data, req.body.file] };

      // `doc` is the document _after_ `update` was applied because of
      // `new: true`
      // let doc = await Character.findOneAndUpdate(filter, update, {
      //   new: true,
      // });
      // Hackathon.hackathonData.findOneAndUpdate(
      //   { username: username },
      //   { $set: { username: username, name: [...hack_data, req.body.file] } },
      //   { returnNewDocument: true }
      // );
      console.log("saved in mongo");
      const certificate_data = await Hackathon.findOne({
        username: username,
      });
      res.status(200).json(certificate_data);
      // console.log("Certificate Added" + certificate_data);
      // console.log("Certificate Added" + certificate_data);
    } else {
      console.log("not found inserting newly");
      const certificate = await Hackathon.create({
        name: [req.body.name],
        username: username,
      });
      const certificate_data = await certificate.save();
      res.status(200).json(certificate_data);
      console.log("New user certificate created");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};
export const getHackathon = async (req, res) => {
  try {
    console.log("Getting certifcate");
    let present = await Hackathon.findOne({ username: username });
    console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const certificate_data = await Hackathon.findOne({ username: username });
      res.status(200).json(certificate_data);
    } else {
      console.log("certificate not found");
      res.status(401).json({ message: "No user found" });
      console.log(" User has no hackathon certificates ");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};

export const addInternship = async (req, res) => {
  try {
    console.log("Adding Internship certificate");
    let present = await Internship.findOne({ username: username });
    console.log("asdfa" + present);
    if (present) {
      console.log("found");

      const certificate = await Internship.updateOne(
        {
          username: username,
        },
        {
          $set: {
            username: username,
            name: [...present.name, req.body.name],
          },
        },
        { new: true }
      );
      const certificate_data = await Internship.findOne({ username: username });
      res.status(200).json(certificate_data);
      console.log("Certificate Added");
    } else {
      console.log("not found inserting newly");
      const certificate = await Internship.create({
        name: [req.body.name],
        username: username,
      });
      const certificate_data = await certificate.save();
      res.status(200).json(certificate_data);
      console.log("New user certificate created");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};

export const getInternship = async (req, res) => {
  try {
    console.log("Getting internship certifcate");
    let present = await Internship.findOne({ username: username });
    console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const certificate_data = await Internship.findOne({ username: username });
      res.status(200).json(certificate_data);
    } else {
      console.log(" internship certificate not found");
      res.status(401).json({ message: "No user found" });
      console.log(" User has no hackathon certificates ");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};

export const addCourseEight = async (req, res) => {
  try {
    console.log("Adding course_eight certificate");
    let present = await course_eight.findOne({ username: username });
    console.log("asdfa" + present);
    if (present) {
      console.log("found");

      const certificate = await course_eight.updateOne(
        {
          username: username,
        },
        {
          $set: {
            username: username,
            name: [...present.name, req.body.file],
          },
        },
        { new: true }
      );
      const certificate_data = await course_eight.findOne({
        username: username,
      });
      res.status(200).json(certificate_data);
      console.log("Certificate Added");
    } else {
      console.log("not found inserting newly");
      const certificate = await course_eight.create({
        name: [req.body.name],
        username: username,
      });
      const certificate_data = await certificate.save();
      res.status(200).json(certificate_data);
      console.log("New user certificate created");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};

export const getCourseEight = async (req, res) => {
  try {
    console.log("Getting course eight certifcate");
    let present = await course_eight.findOne({ username: username });
    console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const certificate_data = await course_eight.findOne({
        username: username,
      });
      res.status(200).json(certificate_data);
    } else {
      console.log(" internship certificate not found");
      res.status(401).json({ message: "No user found" });
      console.log(" User has no hackathon certificates ");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};

export const addCourseTweleve = async (req, res) => {
  try {
    console.log("Adding certificate");
    let present = await course_tweleve.findOne({ username: username });
    console.log("asdfa" + present);
    if (present) {
      console.log("found");

      const certificate = await course_tweleve.updateOne(
        {
          username: username,
        },
        {
          $set: {
            username: username,
            name: [...present.name, req.body.file],
          },
        },
        { new: true }
      );
      const certificate_data = await course_tweleve.findOne({
        username: username,
      });
      res.status(200).json(certificate_data);
      console.log("Certificate Added");
    } else {
      console.log("not found inserting newly");
      const certificate = await course_tweleve.create({
        name: [req.body.name],
        username: username,
      });
      const certificate_data = await certificate.save();
      res.status(200).json(certificate_data);
      console.log("New user certificate created");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};

export const getCourseTweleve = async (req, res) => {
  try {
    console.log("Getting course eight certifcate");
    let present = await course_tweleve.findOne({ username: username });
    console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const certificate_data = await course_tweleve.findOne({
        username: username,
      });
      res.status(200).json(certificate_data);
    } else {
      console.log(" 12 -week  certificate not found");
      res.status(401).json({ message: "No user found" });
      console.log(" User has no 12 -week certificates ");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};
