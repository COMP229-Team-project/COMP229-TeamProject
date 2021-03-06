"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSurveyDataToUser = exports.UpdateUserProfile = exports.ProcessLogout = exports.RegisterUser = exports.ProcessLogin = exports.UpdateActiveDateRange = exports.AddResponse = exports.EditSurvey = exports.GetSurvey = exports.DeleteSurvey = exports.AddSurvey = exports.SendUserSurveys = exports.SendSurveyCatalogue = void 0;
const survey_1 = __importDefault(require("../models/survey"));
const user_1 = __importDefault(require("../models/user"));
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../config/db");
const user_2 = __importDefault(require("../models/user"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const email_template_1 = require("../models/email-template");
function SendSurveyCatalogue(req, res, next) {
    survey_1.default.find({
        startDate: { $lt: Date.now() },
        endDate: { $gt: Date.now() },
    }, {}, { sort: { name: 1 } }, (err, surveys) => {
        if (err) {
            console.error(err);
        }
        res.json(surveys);
    });
}
exports.SendSurveyCatalogue = SendSurveyCatalogue;
function SendUserSurveys(req, res, next) {
    survey_1.default.find({ creatorId: req.body.creatorId }, {}, { sort: { name: 1 } }, (err, surveys) => {
        if (err) {
            console.error(err);
        }
        res.json(surveys);
    });
}
exports.SendUserSurveys = SendUserSurveys;
function AddSurvey(req, res, next) {
    let newSurvey = new survey_1.default({
        title: req.body.title,
        description: req.body.description,
        avatar: req.body.avatar,
        questions: req.body.questions,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        creatorId: req.body.creatorId,
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
            console.log({ serverError: err });
            return res.json(err);
        }
        if (!user) {
            return res.json("Login Failed. Wrong Email and/or Password");
        }
        req.login(user, (err) => {
            if (err) {
                return res.json(err);
            }
            const payload = {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
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
                    firstName: user.firstName,
                    lastName: user.lastName,
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
    });
    let password = req.body.password;
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log(err);
            if (err.name == "UserExistsError") {
                console.log("Error: User Already Exists!");
                return res.json("Account with that email already exists!");
            }
        }
        else {
            passport_1.default.authenticate("local", (err, user, info) => {
                if (err) {
                    return res.json(err);
                }
                if (!user) {
                    return res.json("Login Failed. Wrong Email and/or Password");
                }
                req.login(user, (err) => {
                    if (err) {
                        return res.json(err);
                    }
                    const payload = {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
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
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                        },
                        token: authToken,
                    });
                });
            })(req, res, next);
        }
    });
}
exports.RegisterUser = RegisterUser;
function ProcessLogout(req, res, next) {
    req.logout();
    res.json({ success: true, msg: "User Successfully Logged out!" });
}
exports.ProcessLogout = ProcessLogout;
function UpdateUserProfile(req, res, next) {
    let id = req.body._id;
    let user = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    };
    user_2.default.updateOne({ _id: id }, user, {}, (err) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: "There was an error updating your proflie.",
            });
        }
        res.json({ success: true, msg: "User has been updated!" });
    });
}
exports.UpdateUserProfile = UpdateUserProfile;
function EmailSurveyDataToUser(req, res, next) {
    let transporter = nodemailer_1.default.createTransport({
        service: "outlook",
        auth: {
            user: "kenpfowler@outlook.com",
            pass: "ChickenNoodleSoup1#!$",
        },
    });
    let mailOptions = {
        from: "kenpfowler@outlook.com",
        to: `${req.body.user.email}`,
        subject: "Your QuizHive Report",
        html: email_template_1.template(req.body.user.firstName, req.body.survey),
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json("There was a problem sending your report");
        }
        else {
            console.log("Email sent!");
            res.json({ success: true, msg: "Your report was sent" });
        }
    });
}
exports.EmailSurveyDataToUser = EmailSurveyDataToUser;
//# sourceMappingURL=survey-api.js.map