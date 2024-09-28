const express = require("express");
const Querry = require("../models/querry");
const router = express.Router();

router.get("/", async (req, res) => {
  await Querry.find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.post("/", async (req, res) => {
  const querry = req.body;

  await Querry.create(querry)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
