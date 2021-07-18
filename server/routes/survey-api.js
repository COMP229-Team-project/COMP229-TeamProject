"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const survey_api_1 = require("../controllers/survey-api");
router.get("/", survey_api_1.SendSurveyCatalogue);
router.get("/surveys", survey_api_1.SendSurveyCatalogue);
router.post("/add", survey_api_1.AddSurvey);
router.delete("/delete/:id", survey_api_1.DeleteSurvey);
router.get("/edit/:id", survey_api_1.GetSurvey);
router.post("/edit/:id", survey_api_1.EditSurvey);
exports.default = router;
//# sourceMappingURL=survey-api.js.map