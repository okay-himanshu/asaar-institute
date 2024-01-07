import "dotenv/config";
import connectDB from "./database/connectDB.js";
import express from "express";
import cors from "cors";

import { ENV_CONFIG } from "./config/env_config.js";
// USER ROUTE IMPORT
import userRoute from "./routes/users/route.users.js";

const app = express();
const BASE_API_URL = "/api/v1";
const PORT = ENV_CONFIG.PORT || 8080; // incase env port not working 8080 is default port

// DB connection
connectDB();

// app level middleware
app.use(cors());
app.use(express.json());

// user route
app.use(`${BASE_API_URL}/user`, userRoute);

// listening to port
app.listen(PORT, () => console.info(` http://localhost:${PORT}`));
