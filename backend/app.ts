import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./src/lib/db.js";
import authRoute from "./src/routes/auth.routes.js";
import messageRoute from "./src/routes/message.routes.js";

app.use(express.json());
connectDB();

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
