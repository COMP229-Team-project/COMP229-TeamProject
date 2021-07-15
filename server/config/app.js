/*

 @file
 server/config/app.js
  Hyekyeong Park(Kate) || 301148613 || COMP229 || Midterm 

*/

// moddules for node and express
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

// import "mongoose" - required for DB Access
let mongoose = require("mongoose");
// URI
let DB = require("./db");

mongoose.connect(process.env.URI || DB.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//display console messages to identify connection
let mongoDB = mongoose.connection; //alias
mongoDB.on("error", console.error.bind(console, "Connection Error: :( "));
//loop over connections and print host and database name
mongoDB.once("open", () => {
  for (const connection of mongoose.connections) {
    console.log(
      `Connected to MongoDB at: ${connection.host} and DB: ${connection.name}`
    );
  }
});

// define routers
let index = require("../routes/index"); // top level routes
let books = require("../routes/books"); // routes for books

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// uncomment after placing your favicon in /client
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../client")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

// route redirects
app.use("/", index);
app.use("/api", books);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
