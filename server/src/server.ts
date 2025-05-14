import express, { Request, Response } from "express";
import authroute from "./routes/auth.route";
import dotenv from "dotenv";
dotenv.config();
import { config } from "./config/env";

import { connectDB } from "./lib/db";

const app = express();
const PORT = config.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authroute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
