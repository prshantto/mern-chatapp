import express, { Request, Response } from "express";
import authroute from "./routes/auth.route";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authroute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
