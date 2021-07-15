import express from "express";
const router = express.Router();

import { SendSurveyCatalogue } from "../controllers/survey-api";

//RESPOND with JSON representing survey objects
router.get("/", SendSurveyCatalogue);
router.get("/surveys", SendSurveyCatalogue);

export default router;
