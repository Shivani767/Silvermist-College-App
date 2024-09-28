const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

var backendHtml =
  '\
        <html>\
        <link rel="preconnect" href="https://fonts.googleapis.com">\
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">\
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">\
        <link rel="icon" type="image/x-icon" href="https://puchd.ac.in/asset/pu-logo.png">\
        <title>API PuMeet</title>\
            <body style="background-color:black; margin:0px; padding:0px; font-family: Josefin Sans, sans-serif;;">\
                <div style="display: flex;\
                    justify-content: center;\
                    align-items: center;\
                    height: 100vh;\
                    margin:0px; padding:0px;\
                    width: 100vw;\
                    font-size: 50px;\
                    color: white;">\
                        <h1>DIC-</h1> <br> \
                        <h1>WEB-DEV</h1> \
                        &nbsp;<p style="font-size:50px;">API</p>\
                </div>\
            </body>\
        </html>\
';

app.get("/", (req, res) => {
  res.send(backendHtml);
});

app.use("/uploads", express.static("uploads"));

app.use("/querry", require("./routes/querry"));
app.use("/verification", require("./routes/veification"));
app.use("/student", require("./routes/student"));

// No Route
app.get("*", (req, res) => {
  res.send({ Message: "No page found!" });
});

// Server and Database
app.listen(process.env.PORT || 8000, () =>
  console.log(`Server started on port 8000`)
);
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MDB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
