import express from "express";
import { Certificates } from "../models/cerificateSchema.js";
import bcrypt from "bcryptjs";
import jwt, { decode } from "jsonwebtoken";

export const addCertificate = async (req, res) => {
  // console.log(req.body)
  try {
    console.log("Adding certificate");
    const username = "never"; //fetch from localstorage
    let present = await Certificates.findOne({
      activity: { username: "never" },
    });
    console.log("asdfa" + present);
    if (present) {
      console.log("found");
      const certificate = await Certificates.updateOne(
        {
          activity: { username: [username] },
        },
        {
          $set: {
            activity: { username: [username], hackathon: ["hack45"] },
          },
        },
        { new: true }
      );
      res.status(200).json(certificate);
      console.log("Certificate Added");
    } else {
      console.log("not found inserting newly");
      const certificate = await Certificates.create({
        activity: {
          hackathon: ["hack", "hack2"],
          courses: ["course1", "course2"],
          username: [username],
        },
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
