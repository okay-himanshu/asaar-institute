import mongoose from "mongoose";
import { ENV_CONFIG } from "../config/env_config.js";

export default async function connectDB() {
  try {
    const connect = await mongoose.connect(ENV_CONFIG.DATABASE_URL, {
      dbName: ENV_CONFIG.DATABASE_NAME,
    });
    if (connect) console.log("Database connected successfully");
  } catch (err) {
    if (err) console.error(err);
  }
}
