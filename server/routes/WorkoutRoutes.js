import express from "express";
import {
  getUserDashboard,
  addWorkout,
  getWorkoutsByDate,
} from "../controllers/WorkoutController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);

export default router;
