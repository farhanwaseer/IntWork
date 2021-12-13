const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 4000;

// Express Route
const studentRoute = require("./Models/routes/student.route");

// Connecting mongoDB Database
app.use(cors());
app.use(bodyParser.json());
app.use("/students", studentRoute);

mongoose.connect("mongodb://127.0.0.1:27017/reactdb", {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

// PORT

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

// 404 Error
app.use((req, res, next) => {
    next(createError(404));
  });
  
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
