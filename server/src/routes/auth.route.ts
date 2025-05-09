import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const router: Router = Router();

router.get("/", authController);

export default router;
