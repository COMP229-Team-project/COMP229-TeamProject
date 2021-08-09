"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const SurveySchema = new Schema({
    title: String,
    description: String,
    avatar: String,
    questions: [],
    responses: [],
    startDate: Date,
    endDate: Date,
    creatorId: String,
}, {
    collection: "Quizzes",
    timestamps: true,
});
const SurveyModel = mongoose_1.default.model("Quizzes", SurveySchema);
exports.default = SurveyModel;
//# sourceMappingURL=survey.js.map