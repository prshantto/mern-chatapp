import mongoose from "mongoose";
import { config } from "../config/env";

export const connectDB = () => {
  try {
    mongoose.connect(config.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
