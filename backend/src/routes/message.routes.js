import express from "express";
const router = express.Router();
import { checkMessageRoute } from "../controllers/message.controller.js";

router.get("/check", checkMessageRoute);

export default router;
