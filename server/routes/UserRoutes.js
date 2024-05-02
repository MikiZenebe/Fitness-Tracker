import express from "express";
import { UserLogin, UserRegister } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/login", UserLogin);

export default router;
