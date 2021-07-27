import express from "express";
let router = express.Router();

import {
  SendSurveyCatalogue,
  AddSurvey,
  DeleteSurvey,
  GetSurvey,
  EditSurvey,
  AddResponse,
  UpdateActiveDateRange,
  RegisterUser,
  ProcessLogout,
  ProcessLogin,
} from "../controllers/survey-api";

/* POST Route for processing the Register page */
router.post("/register", RegisterUser);

/* POST Route for processing the Login page */
router.post("/login", ProcessLogin);

/* GET to perform UserLogout */
router.get("/logout", ProcessLogout);

//RESPOND with JSON representing survey objects
router.get("/", SendSurveyCatalogue);
router.get("/surveys", SendSurveyCatalogue);

//POST JSON  to server
router.post("/add", AddSurvey);

//DELETE survey from server
router.delete("/delete/:id", DeleteSurvey);

//GET the details of a particualr survey
router.get("/edit/:id", GetSurvey);

//POST the changes to the server
router.post("/edit/:id", EditSurvey);

//POST responses to a specific survey
router.post("/responses", AddResponse);

//POST update to a surveys date range property
router.post("/updatedaterange", UpdateActiveDateRange);

export default router;
