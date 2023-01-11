const express = require("express");
const cors = require("cors");
const data = require("./data");
const path = require("path");
// const index = require("./");
const App = express();

// console.log(path.resolve("error.html"));
App.use(express.static("public"));

App.get("/", (req, res) => {
  console.log("REquest send from backeend");
  console.log(req.protocol);
  res.sendFile(path.join(__dirname, "/index.html"));
});
App.get("/github", (req, res) => {
  console.log("REquest send from backeend");
  ``;
  res.send(data);
});
App.get("/about", (req, res) => {
  console.log("REquest send from backeend");
  res.send("hello this iss about page");
});
App.get("*", (req, res) => {
  console.log("REquest send from backeend");
  res.sendFile(path.resolve("error.html"));
});

App.listen(3000, () => {
  console.log("Server Started");
});

// App.use(cors());
App.use(
  cors({
    origin: "*",
  })
);

// var express = require("express");
// var multer = require("multer");
// var app = express();
// var storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "./uploads");
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
// });
// var upload = multer({ storage: storage }).single("myfile");

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/uploadjavatpoint", function (req, res) {
//   upload(req, res, function (err) {
//     if (err) {
//       return res.end("Error uploading file.");
//     }
//     res.end("File is uploaded successfully!");
//   });
// });

// app.listen(2000, function () {
//   console.log("Server is running on port 2000");
// });
