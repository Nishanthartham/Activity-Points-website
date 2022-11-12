import express from "express";
import { addCertificate } from "../controllers/oldCertificateController.js";
import { addHackathon } from "../controllers/certificateController.js";
import { addInternship } from "../controllers/certificateController.js";
import { addCourseEight } from "../controllers/certificateController.js";
import { addCourseTweleve } from "../controllers/certificateController.js";
const router = express.Router();

router.post("/add8cred", addCertificate);
router.post("/hackathon", addHackathon);
router.post("/internship", addInternship);
router.post("/eightWeekCourse", addCourseEight);
router.post("/tweleveWeekCourse", addCourseTweleve);

export default router;
