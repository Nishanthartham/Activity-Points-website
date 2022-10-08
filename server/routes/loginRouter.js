import express from "express";
import { registerUser, findUser } from "../controllers/loginController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", findUser);

export default router;
