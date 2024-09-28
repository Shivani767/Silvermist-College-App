const express = require("express");
const router = express.Router();
const Verification = require("../models/verification");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sgMailFunction = async (OTP, email, res) => {
  const msg = {
    to: email,
    from: "rohitchadda347@gmail.com",
    subject: "OTP for using in data verification for UIET site.",
    html: `<div>
                <h1>Email verification</h1>
                <h3>OTP: ${OTP} </h3>
                <h3>Hello, thanks for registering on my site.</h3>
                <h5>If you haven't registered please ignore this and if you get this often please mail me.</h5>
               </div>`,
  };
  sgMail
    .send(msg)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Error:", error.response.body.errors);
    });
};

router.post("/", async (req, res) => {
  const email = req.body.email;
  const num = Math.ceil(Math.random() * 1000000);
  const OTP = num.toString();
  sgMailFunction(OTP, email, res);
  const query = { email };
  const update = {
    $set: {
      email,
      OTP,
      date: Date.now(),
    },
  };
  const options = { upsert: true };
  await Verification.updateOne(query, update, options);
  res.status("200").send("OTP sent Successfully");
});

module.exports = router;
