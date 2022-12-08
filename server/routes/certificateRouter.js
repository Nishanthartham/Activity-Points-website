import express from "express";
// import { Auth } from "../Middleware/Auth.js";
import { addCertificate } from "../controllers/oldCertificateController.js";
import {
  addHackathon,
  getHackathon,
} from "../controllers/certificateController.js";
import {
  addInternship,
  getInternship,
} from "../controllers/certificateController.js";
import {
  addCourseEight,
  getCourseEight,
} from "../controllers/certificateController.js";
import {
  addCourseTweleve,
  getCourseTweleve,
} from "../controllers/certificateController.js";
const router = express.Router();

// const jwt =require('jsonwebtoken');
import jwt from "jsonwebtoken";

const Auth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log("inside auth header");
  //check token
  if (authHeader == null) {
    console.log("denied");

    return res.status(401).json({ error: "Access-denied" });
  }

  //check validity
  try {
    console.log("allowed" + authHeader);

    const verified = jwt.verify(authHeader, "token");
    console.log("alloweds" + verified);
    // req.id = { username: verified.username }; //if verified the token will be decoded and the username of the user will be extracted and passed.
    next();
    console.log("allowed next");
  } catch (e) {
    res.status(401).json({ error: "Invalid-token" });
  }
};

// module.exports = { auth };

router.post("/add8cred", addCertificate);
console.log("Inside router");

router.post("/hackathon/:id", addHackathon);
router.get("/hackathon/:id", getHackathon);

router.post("/internship", addInternship);
router.get("/internship", getInternship);

router.post("/eightweekcourse", addCourseEight);
router.get("/eightweekcourse", getCourseEight);

router.post("/tweleveWeekCourse", addCourseTweleve);
router.get("/tweleveWeekCourse", getCourseTweleve);

export default router;
