const Task = require("../models/Task");
const getTask = async (req, res) => {
  try {
    const userId = req.me._id;
    const tasks = await Task.find({ userId: userId }).select("-__v -userId -createdAt -updatedAt");
    return res.json({
      status: 200,
      data: tasks,
      message: "Task fetched successfully",
    });
  } catch (error) {
    return res.json({
      status: 500,
      data: [],
      error: "Error while fetching data",
      message: "",
    });
  }
};

const addTask = async (req, res) => {
  try {
    const userId = req.me._id;
    const taskData = req.body;

    if (!taskData.title || !taskData.status || !taskData.priority) {
      return res.json({
        status: 400,
        data: {},
        error: "Title, status and priority are required",
      });
    }

    const isTaskExist = await Task.findOne({
      title: taskData.title,
      userId: userId,
    });

    if (isTaskExist) {
      return res.json({
        status: 400,
        data: {},
        error: "Task already exist",
      });
    }

    await Task.create({
      title: taskData.title,
      status: taskData.status,
      priority: taskData.priority,
      userId: userId,
    });

    return res.json({
      status: 200,
      data: {},
      message: "Task added successfully",
    });
  } catch (error) {
    return res.json({
      status: 500,
      data: {},
      error: "Error while adding task",
      message: "",
    });
  }
};
const editTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.me._id;
    const editData = req.body;

    if (!taskId) {
      return res.json({
        status: 400,
        data: {},
        error: "Task id is required",
      });
    }

    const task = await Task.findOne({ _id: taskId, userId: userId });

    if (!task) {
      return res.json({
        status: 404,
        data: {},
        error: "Task not found",
      });
    }

    if (editData.title) {
      task.title = editData.title;
    }
    if (editData.status) {
      task.status = editData.status;
    }
    if (editData.priority) {
      task.priority = editData.priority;
    }

    const isTaskExist = await Task.findOne({
      id: { "!=": taskId },
      title: task.title,
      userId: userId,
    });
    if (isTaskExist) {
      return res.json({
        status: 400,
        data: {},
        error: "Task already exist",
      });
    }
    await task.save();
    return res.json({
      status: 200,
      data: {},

      message: "Task edited successfully",
    });
  } catch (error) {
    
    return res.json({
      status: 500,
      data: {},
      error: "Error while editing task",
      message: "",
    });
  }
};
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.me._id;

    if (!taskId) {
      return res.json({
        status: 400,
        data: {},
        error: "Task id is invalid",
      });
    }

    const task = await Task.findOne({ _id: taskId, userId: userId });

    if (!task) {
      return res.json({
        status: 404,
        data: {},
        error: "Task not found",
      });
    }

    await Task.deleteOne({ _id: taskId });

    return res.json({
      status: 200,
      data: {},

      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.json({
      status: 500,
      data: {},
      error: "Error while deleting task",
      message: "",
    });
  }
};

module.exports = { getTask, addTask, editTask, deleteTask };
