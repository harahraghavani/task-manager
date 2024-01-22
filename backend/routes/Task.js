const express = require("express");

const authPolicy = require("../middleware/auth");
const {
  getTask,
  addTask,
  editTask,
  deleteTask,
} = require("../controllers/Task");

const taskRouter = express.Router();

taskRouter.get("/", authPolicy, getTask);
taskRouter.post("/add", authPolicy, addTask);
taskRouter.post("/edit/:id", authPolicy, editTask);
taskRouter.delete("/delete/:id", authPolicy, deleteTask);

module.exports = taskRouter;
