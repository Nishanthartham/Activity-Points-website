import express from "express";
import { Auth } from "../Middleware/Auth.js";
import { addCertificate } from "../controllers/oldCertificateController.js";
import {
  addHackathon,
  getHackathon,
  getHackathonCount,
  deleteHackathon,
  deleteCourseTwelve,
  getCourseTwelveCount,
} from "../controllers/certificateController.js";
import {
  addInternship,
  getInternship,
  getInternshipCount,
  deleteInternship,
} from "../controllers/certificateController.js";
import {
  addCourseEight,
  getCourseEight,
  getCourseEightCount,
  deleteCourseEight,
} from "../controllers/certificateController.js";
import {
  addCourseTweleve,
  getCourseTweleve,
  deleteCourseTwelve,
  getCourseTwelveCount,
} from "../controllers/certificateController.js";
const router = express.Router();

// const jwt =require('jsonwebtoken');
import jwt from "jsonwebtoken";

router.post("/add8cred", addCertificate);
console.log("Inside router");

router.post("/hackathon", Auth, addHackathon);
router.delete("/hackathon/:id", Auth, deleteHackathon);
router.get("/hackathon/", Auth, getHackathon);
router.get("/hackathonCount/", Auth, getHackathonCount);

router.post("/internship", Auth, addInternship);
router.delete('/internship/:id',Auth,deleteInternship);
router.get("/internship", Auth, getInternship);
router.get("/internshipCount/", Auth, getInternshipCount);

router.post("/eightweekcourse", Auth, addCourseEight);
router.get("/eightweekcourse", Auth, getCourseEight);
router.delete('/eightweekcourse/:id',Auth,deleteCourseEight);
router.get('/eightweekcourse/',Auth,getCourseEightCount);

router.post("/tweleveWeekCourse",Auth, addCourseTweleve);
router.get("/tweleveWeekCourse", Auth, getCourseTweleve);
router.delete('/tweleveweekcourse/:id',Auth,deleteCourseTwelve);
router.get('/tweleveweekcourse/',Auth,getCourseTwelveCount);

export default router;
