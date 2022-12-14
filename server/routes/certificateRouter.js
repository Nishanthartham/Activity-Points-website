import express from "express";
import { Auth } from "../Middleware/Auth.js";
import { addCertificate } from "../controllers/oldCertificateController.js";
import {
  addHackathon,
  getHackathon,
  getHackathonCount,
} from "../controllers/certificateController.js";
import {
  addInternship,
  getInternship,
  getInternshipCount,
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

router.post("/add8cred", addCertificate);
console.log("Inside router");

router.post("/hackathon", Auth, addHackathon);
router.get("/hackathon/", Auth, getHackathon);
router.get("/hackathonCount/", Auth, getHackathonCount);

router.post("/internship", Auth, addInternship);
router.get("/internship", Auth, getInternship);
router.get("/internshipCount/", Auth, getInternshipCount);

router.post("/eightweekcourse", addCourseEight);
router.get("/eightweekcourse", getCourseEight);

router.post("/tweleveWeekCourse", addCourseTweleve);
router.get("/tweleveWeekCourse", getCourseTweleve);

export default router;
