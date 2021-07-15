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
    question: [
        {
            question1: String,
            answer1: String,
            answer2: String,
            answer3: String,
            answer4: String,
        },
        {
            question2: String,
            answer1: String,
            answer2: String,
            answer3: String,
            answer4: String,
        },
        {
            question3: String,
            answer1: String,
            answer2: String,
            answer3: String,
            answer4: String,
        },
        {
            question4: String,
            answer1: String,
            answer2: String,
            answer3: String,
            answer4: String,
        },
    ],
}, {
    collection: "surveys",
    timestamps: true,
});
const SurveyModel = mongoose_1.default.model("Surveys", SurveySchema);
exports.default = SurveyModel;
//# sourceMappingURL=survey.js.map