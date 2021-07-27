"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogout = exports.RegisterUser = exports.ProcessLogin = exports.UpdateActiveDateRange = exports.AddResponse = exports.EditSurvey = exports.GetSurvey = exports.DeleteSurvey = exports.AddSurvey = exports.SendSurveyCatalogue = void 0;
const survey_1 = __importDefault(require("../models/survey"));
const user_1 = __importDefault(require("../models/user"));
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../Config/db");
function SendSurveyCatalogue(req, res, next) {
    survey_1.default.find({}, {}, { sort: { name: 1 } }, (err, surveys) => {
        if (err) {
            console.error(err);
        }
        console.log(surveys);
        res.json(surveys);
    });
}
exports.SendSurveyCatalogue = SendSurveyCatalogue;
function AddSurvey(req, res, next) {
    let newSurvey = new survey_1.default({
        title: req.body.title,
        description: req.body.description,
        avatar: req.body.avatar,
        questions: req.body.questions,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
    });
    survey_1.default.create(newSurvey, (err, SurveyModel) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({ success: true, msg: "New Survey is Created" });
        }
    });
}
exports.AddSurvey = AddSurvey;
function DeleteSurvey(req, res, next) {
    let id = req.params.id;
    survey_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: "Survey has been deleted" });
    });
}
exports.DeleteSurvey = DeleteSurvey;
function GetSurvey(req, res, next) {
    let id = req.params.id;
    survey_1.default.findById(id, {}, {}, (err, survey) => {
        if (err) {
            console.error({ err: err, id: id });
            res.end(err);
        }
        else {
            res.json(survey);
        }
    });
}
exports.GetSurvey = GetSurvey;
function EditSurvey(req, res, next) {
    let id = req.params.id;
    let updatedSurvey = new survey_1.default({
        _id: id,
        title: req.body.title,
        description: req.body.description,
        avatar: req.body.avatar,
        questions: req.body.questions,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
    });
    survey_1.default.updateOne({ _id: id }, updatedSurvey, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: "Survey has been updated" });
    });
}
exports.EditSurvey = EditSurvey;
function AddResponse(req, res, next) {
    let id = req.body.id;
    let responses = {
        response1: req.body.response1,
        response2: req.body.response2,
        response3: req.body.response3,
        response4: req.body.response4,
    };
    console.log({ id: id, response: responses });
    survey_1.default.updateOne({ _id: id }, { $push: { responses: responses } }, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: "Response has been added" });
    });
}
exports.AddResponse = AddResponse;
function UpdateActiveDateRange(req, res, next) {
    let id = req.body.id;
    let update = { startDate: req.body.startDate, endDate: req.body.endDate };
    console.log({ id: id, update: update });
    survey_1.default.updateOne({ _id: id }, update, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, msg: "Lifetime has been updated!" });
    });
}
exports.UpdateActiveDateRange = UpdateActiveDateRange;
function ProcessLogin(req, res, next) {
    passport_1.default.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash("loginMessage", "Authentication Error");
            return res.redirect("/login");
        }
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            const payload = {
                id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email,
            };
            const authToken = jsonwebtoken_1.default.sign(payload, db_1.DB.Secret, {
                expiresIn: 604800,
            });
            return res.json({
                success: true,
                msg: "User Logged in Successfully!",
                user: {
                    id: user._id,
                    displayName: user.displayName,
                    username: user.username,
                    email: user.email,
                },
                token: authToken,
            });
        });
    })(req, res, next);
}
exports.ProcessLogin = ProcessLogin;
function RegisterUser(req, res, next) {
    let newUser = new user_1.default({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        userName: req.body.username,
    });
    let password = req.body.password;
    user_1.default.register(newUser, password, (err) => {
        if (err) {
            console.log("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                req.flash("registerMessage", "Registration Error: User Already Exists!");
                console.log("Error: User Already Exists!");
            }
            return res.render("auth/register", {
                title: "Register",
                messages: req.flash("registerMessage"),
            });
        }
        else {
            return res.json({ success: true, msg: "User Registered Successfully!" });
        }
    });
}
exports.RegisterUser = RegisterUser;
function ProcessLogout(req, res, next) {
    req.logout();
    res.json({ success: true, msg: "User Successfully Logged out!" });
}
exports.ProcessLogout = ProcessLogout;
//# sourceMappingURL=survey-api.js.map