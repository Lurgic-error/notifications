require("dotenv").config();

require("./config/database");

const express = require("express");

const path = require("path");

const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");

const morgan = require("morgan");

// Morgan for logging all requests and responses
app.use(morgan("dev"));

//support parsing of application/x-www-form-urlencoded post data
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(cors());

// Routers
app.use("", require("./routers"));

app.use(express.static(path.join(__dirname, "dist")));

// Error Handler
app.use((req, res, next) => {
  const error = new Error("App error handler: Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(8000, () => {
  console.log("kimepop...".toUpperCase());
});
