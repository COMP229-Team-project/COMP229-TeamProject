"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
let JWTStrategy = passport_jwt_1.default.Strategy;
let ExtractJWT = passport_jwt_1.default.ExtractJwt;
const passport_local_1 = __importDefault(require("passport-local"));
const cors_1 = __importDefault(require("cors"));
let localStrategy = passport_local_1.default.Strategy;
const user_js_1 = __importDefault(require("../models/user.js"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_js_1 = require("./db.js");
mongoose_1.default.connect(db_js_1.DB.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
let mongoDB = mongoose_1.default.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error: :( "));
mongoDB.once("open", () => {
    for (const connection of mongoose_1.default.connections) {
        console.log(`Connected to MongoDB at: ${connection.host} and DB: ${connection.name}`);
    }
});
const survey_api_1 = __importDefault(require("../routes/survey-api"));
let app = express_1.default();
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "../../client")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../node_modules")));
app.use(cors_1.default());
app.use(express_session_1.default({ secret: db_js_1.DB.Secret, saveUninitialized: false, resave: false }));
app.use(connect_flash_1.default());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
passport_1.default.use(user_js_1.default.createStrategy());
passport_1.default.serializeUser(user_js_1.default.serializeUser());
passport_1.default.deserializeUser(user_js_1.default.deserializeUser());
let jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: db_js_1.DB.Secret,
};
let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
    user_js_1.default.findById(jwt_payload.id)
        .then((user) => {
        return done(null, user);
    })
        .catch((err) => {
        return done(err, false);
    });
});
passport_1.default.use(strategy);
app.use("/api", survey_api_1.default);
const allowed = [".js", ".css", ".png", ".jpg"];
app.use("*", (req, res) => {
    if (req.url) {
        console.log({ if: req.url });
        res.sendFile(path_1.default.join(__dirname, `../../public/${req.url}`));
    }
    else {
        console.log({ else: req.url });
        res.sendFile(path_1.default.join(__dirname, "../../public/index.html"));
    }
});
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error", { title: "Error" });
});
exports.default = app;
//# sourceMappingURL=app.js.map