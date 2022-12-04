import express from "express";
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

router.post("/add8cred", addCertificate);
console.log("Inside router");

router.post("/hackathon", addHackathon);
router.get("/hackathon/:id", getHackathon);

router.post("/internship", addInternship);
router.get("/internship", getInternship);

router.post("/eightweekcourse", addCourseEight);
router.get("/eightweekcourse", getCourseEight);

router.post("/tweleveWeekCourse", addCourseTweleve);
router.get("/tweleveWeekCourse", getCourseTweleve);

export default router;
