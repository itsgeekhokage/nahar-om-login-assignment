import express from "express";
import { getUser, setUser } from "../controllers/authController.js";


const router = express.Router();

router.post("/signin", getUser);
router.post("/signup", setUser);

export default router;