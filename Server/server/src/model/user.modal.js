const mongoose = require("mongoose");

// Define EventUserSchema and model
const EventUserSchema = new mongoose.Schema({
  name: String,
  rollNo: String,
  department: String,
  college: String,
  phoneNo: String,
  email: String,
});

const EventUser = mongoose.model("Event-User-Data", EventUserSchema);

module.exports = EventUser;
