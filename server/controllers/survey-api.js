"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendSurveyCatalogue = void 0;
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
//# sourceMappingURL=survey-api.js.map