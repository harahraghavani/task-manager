const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
});

const Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;
