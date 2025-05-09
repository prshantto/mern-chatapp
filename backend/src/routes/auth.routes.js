import express from "express";
const router = express.Router();
import {
  checkAuth,
  register,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";

router.get("/check", checkAuth);

router.post("/register", register);
router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", updateProfile);

export default router;
