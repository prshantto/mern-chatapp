import { Router } from "express";
import {
  checkAuth,
  register,
  login,
  updateProfile,
  logout,
} from "../controllers/auth.controller";

const router: Router = Router();

router.get("/", checkAuth);

router.post("/register", register);
router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", updateProfile);

export default router;
