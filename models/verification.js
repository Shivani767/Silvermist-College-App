const mongoose = require("mongoose");
const verificationSchema = new mongoose.Schema({
  email: {
    type: String,
    unique:true,
    required: true,
    index: true,
  },
  OTP: {
    type: String,
    required: "true",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Verification = new mongoose.model("Verification", verificationSchema);
module.exports = Verification;
