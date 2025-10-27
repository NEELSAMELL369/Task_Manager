// app.js
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
connectDB();

// __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // points to app/views

// Serve static files from public folder inside app
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", taskRoutes);

export default app;
