"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let mongoose = require("mongoose");
const db_1 = require("./db");
mongoose.connect(process.env.URI || db_1.DB.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error: :( "));
mongoDB.once("open", () => {
    for (const connection of mongoose.connections) {
        console.log(`Connected to MongoDB at: ${connection.host} and DB: ${connection.name}`);
    }
});
let index = require("../routes/index");
let books = require("../routes/books");
const survey_api_1 = __importDefault(require("../routes/survey-api"));
let app = express();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../client")));
app.use(express.static(path.join(__dirname, "../../node_modules")));
app.use("/", index);
app.use("/api", survey_api_1.default);
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
//# sourceMappingURL=app.js.map