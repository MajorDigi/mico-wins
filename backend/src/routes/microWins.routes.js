import express from "express";
import { getMicroWins } from "../controllers/microWins.controller.js";

const router = express.Router();

router.get("/", getMicroWins);

export default router;