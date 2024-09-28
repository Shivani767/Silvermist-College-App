const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  profile: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  roll_no: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    trim: true,
  },
  about: {
    type: String,
    trim: true,
  },
  OTP: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  branch: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  phone_no: {
    type: String,
    trim: true,
  },
  links: {
    type: Array,
    default: [],
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
