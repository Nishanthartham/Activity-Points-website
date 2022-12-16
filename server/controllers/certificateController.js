import express from "express";
import { Hackathon } from "../models/hackathonSchema.js";
import { Internship } from "../models/hackathonSchema.js";
import { course_eight } from "../models/hackathonSchema.js";
import { course_tweleve } from "../models/hackathonSchema.js";
import bcrypt from "bcryptjs";
import jwt, { decode } from "jsonwebtoken";

// const username = "fsd"; //fetch from localstorage
// const username = localStorage.getItem("userId");
// console.log(username);
export const addHackathon = async (req, res) => {
  try {
    const username = req.id;
    console.log("Adding certificate");
    let present = await Hackathon.findOne({ username: username });
    // console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const hack_data = present.name;
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

      console.log("saved in mongo");
      const certificate_data = await Hackathon.findOne({
        username: username,
      });
      console.log("Certificate Added" + certificate_data);
      res.status(200).json(certificate_data);
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
    let present = await Hackathon.findOne({ username: req.id });
    console.log("asdfa" + present);
    if (present) {
      console.log("found hackathon project");
      const certificate_data = await Hackathon.findOne({
        username: req.id,
      });
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
export const getHackathonCount = async (req, res) => {
  try {
    console.log("Getting certifcate");
    let present = await Hackathon.findOne({ username: req.id });
    console.log("req" + req.id);
    // console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const certificate_data = await Hackathon.findOne({
        username: req.id,
      });
      res.status(200).json(certificate_data.name.length);
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

export const deleteHackathon = async (req, res) => {
  try {
    const username = req.id;
    console.log("deleting hackathon certificate");
    const index = JSON.parse(req.params.id);
    let present = await Hackathon.findOne({ username: username });
    // console.log("asdfa" + present);
    if (present) {
      console.log("found");
      let hack_data = present.name;
      hack_data.splice(index, 1);
      console.log("found 22");
      const certificate = await Hackathon.updateOne(
        {
          username: username,
        },
        {
          $set: {
            username: username,
            name: hack_data, //splice
          },
        },
        { new: true }
      );

      console.log("saved in mongo");
      const certificate_data = await Hackathon.findOne({
        username: username,
      });
      console.log("Certificate deleted successfully" + certificate_data);
      res.status(200).json(certificate_data);
      // console.log("Certificate Added" + certificate_data);
    } else {
      console.log("cant find record cant delete");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};

export const addInternship = async (req, res) => {
  try {
    const username = req.id;
    console.log("Adding Internship certificate");
    let present = await Internship.findOne({ username: username });
    // console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const intern_data = present.name;

      const certificate = await Internship.updateOne(
        {
          username: username,
        },
        {
          $set: {
            username: username,
            name: [...intern_data, req.body.name],
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
    let present = await Internship.findOne({ username: req.id });
    console.log("asdfa" + present);
    if (present) {
      console.log("found internship certificate");
      const certificate_data = await Internship.findOne({
        username: req.id,
      });
      res.status(200).json(certificate_data);
    } else {
      console.log("certificate not found");
      res.status(401).json({ message: "No user found" });
      console.log(" User has no Internship certificates ");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};
export const getInternshipCount = async (req, res) => {
  try {
    const username = req.id;
    console.log("Getting internship certifcate");
    const present = await Internship.findOne({ username: username });
    console.log("req" + req.id);

    // console.log("asdfa" + present);
    if (present) {
      console.log("found");
      // const certificate_data = await Internship.findOne({ username: username });
      res.status(200).json(present.name.length);
    } else {
      console.log(" internship certificate not found");
      res.status(200).json(0);
      console.log(" User has no internship certificates ");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};
export const deleteInternship = async (req, res) => {
  try {
    const username = req.id;
    console.log("deleting internship certificate");
    const index = JSON.parse(req.params.id);
    let present = await Internship.findOne({ username: username });
    // console.log("asdfa" + present);
    if (present) {
      console.log("found");
      let hack_data = present.name;
      hack_data.splice(index, 1);
      console.log("found 22");
      const certificate = await Internship.updateOne(
        {
          username: username,
        },
        {
          $set: {
            username: username,
            name: hack_data, //splice
          },
        },
        { new: true }
      );

      console.log("saved in mongo");
      const certificate_data = await Internship.findOne({
        username: username,
      });
      console.log("Certificate deleted successfully" + certificate_data);
      res.status(200).json(certificate_data);
      // console.log("Certificate Added" + certificate_data);
    } else {
      console.log("cant find record cant delete");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};

export const addCourseEight = async (req, res) => {
  try {
    const username = req.id;
    console.log("Adding course eight certificate");
    let present = await course_eight.findOne({ username: username });
    // console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const intern_data = present.name;

      const certificate = await course_eight.updateOne(
        {
          username: username,
        },
        {
          $set: {
            username: username,
            name: [...intern_data, req.body.name],
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
      console.log("after create ");
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

export const getCourseEightCount = async (req, res) => {
  try {
    const username = req.id;
    console.log("Getting eight week certifcate");
    let present = await course_eight.findOne({ username: username });
    console.log("req" + req.id);

    // console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const certificate_data = await course_eight.findOne({
        username: username,
      });
      res.status(200).json(certificate_data.name.length);
    } else {
      console.log(" course eight certificate not found");
      res.status(200).json(0);
      console.log(" User has no course eight certificates ");
    }
  } catch (error) {
    res.status(401).json({ message: "Some error :(" });
    return;
  }
};

export const deleteCourseEight = async (req, res) => {
  try {
    const username = req.id;
    console.log("deleting course_eight certificate");
    const index = JSON.parse(req.params.id);
    let present = await course_eight.findOne({ username: username });
    // console.log("asdfa" + present);
    if (present) {
      console.log("found");
      let hack_data = present.name;
      hack_data.splice(index, 1);
      console.log("found 22");
      const certificate = await course_eight.updateOne(
        {
          username: username,
        },
        {
          $set: {
            username: username,
            name: hack_data, //splice
          },
        },
        { new: true }
      );

      console.log("saved in mongo");
      const certificate_data = await course_eight.findOne({
        username: username,
      });
      console.log("Certificate deleted successfully" + certificate_data);
      res.status(200).json(certificate_data);
      // console.log("Certificate Added" + certificate_data);
    } else {
      console.log("cant find record cant delete");
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
