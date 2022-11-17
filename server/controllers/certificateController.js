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
    console.log("asdfa" + present);
    if (present) {
      console.log("found");

      const certificate = await Hackathon.updateOne(
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
      const certificate_data = await Hackathon.findOne({ username: username });
      res.status(200).json(certificate_data);
      console.log("Certificate Added");
    } else {
      console.log("not found inserting newly");
      const certificate = await Hackathon.create({
        name: ["hack", "hack2"],
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
            name: [...present.name, req.body.file],
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
        name: ["hack", "hack2"],
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
        name: ["hack", "hack2"],
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
        name: ["hack", "hack2"],
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
