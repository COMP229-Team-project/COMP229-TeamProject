"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
let router = express_1.default.Router();
const survey_api_1 = require("../controllers/survey-api");
router.post("/register", survey_api_1.RegisterUser);
router.post("/login", survey_api_1.ProcessLogin);
router.get("/logout", survey_api_1.ProcessLogout);
router.get("/", survey_api_1.SendSurveyCatalogue);
router.get("/surveys", survey_api_1.SendSurveyCatalogue);
router.post("/usersurveys", passport_1.default.authenticate("jwt", { session: false }), survey_api_1.SendUserSurveys);
router.post("/add", passport_1.default.authenticate("jwt", { session: false }), survey_api_1.AddSurvey);
router.delete("/delete/:id", passport_1.default.authenticate("jwt", { session: false }), survey_api_1.DeleteSurvey);
router.get("/edit/:id", passport_1.default.authenticate("jwt", { session: false }), survey_api_1.GetSurvey);
router.post("/edit/:id", passport_1.default.authenticate("jwt", { session: false }), survey_api_1.EditSurvey);
router.post("/responses", survey_api_1.AddResponse);
router.post("/updatedaterange", passport_1.default.authenticate("jwt", { session: false }), survey_api_1.UpdateActiveDateRange);
exports.default = router;
//# sourceMappingURL=survey-api.js.map