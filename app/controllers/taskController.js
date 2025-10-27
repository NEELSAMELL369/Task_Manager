import Task from "../models/Task.js";

// Get all tasks
export const getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.render("tasks", { tasks });
};

// Create a task
export const createTask = async (req, res) => {
  const { title } = req.body;
  await Task.create({ title });
  res.redirect("/tasks");
};

// Toggle task completion
export const toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.redirect("/tasks");
};

// Delete task
export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/tasks");
};
