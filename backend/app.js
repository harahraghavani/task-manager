const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const taskRouter = require("./routes/Task");

// express app
const app = express();

// connect to mongodb
const dbURL =
  "mongodb+srv://harshr:Harsh1724@cluster0.f0zwfih.mongodb.net/task-manager";

mongoose.connect(dbURL);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors());

app.use(express.json());

app.use("/", authRouter);
app.use("/task", taskRouter);

app.listen(4000);
