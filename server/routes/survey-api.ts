import express from "express";
const router = express.Router();

import {
  SendSurveyCatalogue,
  AddSurvey,
  DeleteSurvey,
  GetSurvey,
  EditSurvey,
} from "../controllers/survey-api";

//RESPOND with JSON representing survey objects
router.get("/", SendSurveyCatalogue);
router.get("/surveys", SendSurveyCatalogue);

//POST JSON  to server
router.post("/add", AddSurvey);

//DELETE survey from server
router.get("/delete/:id", DeleteSurvey);

//GET the details of a particualr survey
router.get("/edit/:id", GetSurvey);

//POST the changes to the server
router.post("/edit/:id", EditSurvey);

export default router;
