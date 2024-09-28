const mongoose = require("mongoose");
const querrySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  querry: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Querry = new mongoose.model("Querry", querrySchema);
module.exports = Querry;
