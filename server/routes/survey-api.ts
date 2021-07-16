import express from "express";
const router = express.Router();

import {
  SendSurveyCatalogue,
  AddSurvey,
  DeleteSurvey,
} from "../controllers/survey-api";

//RESPOND with JSON representing survey objects
router.get("/", SendSurveyCatalogue);
router.get("/surveys", SendSurveyCatalogue);

//POST JSON  to server
router.post("/add", AddSurvey);

//DELETE survey from server
router.get("/delete/:id", DeleteSurvey);
export default router;
