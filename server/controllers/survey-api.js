"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddResponse = exports.EditSurvey = exports.GetSurvey = exports.DeleteSurvey = exports.AddSurvey = exports.SendSurveyCatalogue = void 0;
const survey_1 = __importDefault(require("../models/survey"));
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
        question: req.body.question,
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
        question: req.body.question,
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
//# sourceMappingURL=survey-api.js.map