import express from "express";
import {
  getTasks,
  createTask,
  toggleTask,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", (req, res) => res.redirect("/tasks"));
router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.post("/tasks/:id/toggle", toggleTask);
router.post("/tasks/:id/delete", deleteTask);

export default router;
