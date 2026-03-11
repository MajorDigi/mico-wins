import express from "express";
import { getMicroWins, createMicroWin } from "../controllers/microWins.controller.js";

const router = express.Router();

// GET all micro wins
router.get("/", getMicroWins);
// POST a new micro win
router.post("/", createMicroWin);

export default router;