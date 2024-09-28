const path = require("path");
const express = require("express");
const Student = require("../models/students");
const router = express.Router();
const Verification = require("../models/verification");

router.get("/", async (req, res) => {
  const data = await Student.find();
  res.send(data);
});

const multer = require("multer");
const storageEngine = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});
const checkFileType = function (file, cb) {
  const fileTypes = /jpeg|jpg|png|gif|svg/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);
  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: You can Only Upload Images!!");
  }
};
const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 5000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

router.post("/upload", upload.single("image"), async function (req, res) {
  let profile;
  try {
    profile = req.file.filename;
  } catch (err) {
    profile = "default.jpg";
  }
  let {
    name,
    roll_no,
    email,
    about,
    OTP,
    address,
    branch,
    city,
    phone_no,
    links,
  } = req.body;
  links = links.split(",");
  const user = await Verification.findOne({ email });
  if (user == null) {
    // console.log("No user Exist");
    res.send({ Message: "Enter a valid Email" });
  } else {
    const seconds = (Date.now() - user.date) / 1000;
    const minutes = Math.floor(seconds / 60);
    // console.log(user.OTP, OTP);
    if (
      name === undefined ||
      roll_no === undefined ||
      branch === undefined ||
      email === undefined
    ) {
      res.send({ Message: "Fill all required fields" });
    } else if (user.OTP != OTP) {
      res.send({ Message: "OTP does not match" });
    } else if (minutes >= 30) res.status(401).send({ Message: "OTP expired" });
    else {
      const query = { email };
      const update = {
        $set: {
          profile,
          name,
          roll_no,
          email,
          about,
          address,
          branch,
          city,
          phone_no,
          links,
        },
      };
      const options = { upsert: true };
      await Student.updateOne(query, update, options);
      res.status(200).send({ Message: "Success" });
    }
  }
});

module.exports = router;
