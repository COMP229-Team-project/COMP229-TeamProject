import express from "express";
const router = express.Router();

import { SendSurveyCatalogue, AddSurvey } from "../controllers/survey-api";

//RESPOND with JSON representing survey objects
router.get("/", SendSurveyCatalogue);
router.get("/surveys", SendSurveyCatalogue);

//POST JSON OBJECT to server
router.post("/add", AddSurvey);

export default router;
