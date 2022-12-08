import express from "express";
import { registerUser, findUser } from "../controllers/loginController.js";

const router = express.Router();
const checkUser = (req, res, next) => {
  console.log("middleware activate");
  next();
};
// router.post("/register", checkUser, registerUser);
router.post("/register", registerUser);
// router.post("/login", checkUser, findUser);
router.post("/login", findUser);

export default router;
