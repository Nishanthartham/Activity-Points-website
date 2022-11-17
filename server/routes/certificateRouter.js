import express from "express";
import { addCertificate } from "../controllers/oldCertificateController.js";
import {
  addHackathon,
  getHackathon,
} from "../controllers/certificateController.js";
import { addInternship } from "../controllers/certificateController.js";
import { addCourseEight } from "../controllers/certificateController.js";
import { addCourseTweleve } from "../controllers/certificateController.js";
const router = express.Router();

router.post("/add8cred", addCertificate);
console.log("Inside router");
router.post("/hackathon", addHackathon);

router.get("/hackathon", getHackathon);
router.post("/internship", addInternship);
router.post("/eightWeekCourse", addCourseEight);
router.post("/tweleveWeekCourse", addCourseTweleve);

export default router;
