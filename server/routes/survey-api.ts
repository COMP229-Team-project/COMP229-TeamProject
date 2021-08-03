import express from "express";
import passport from "passport";
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
  SendUserSurveys,
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

//RESPOND with surveys for a particular user
router.post(
  "/usersurveys",
  passport.authenticate("jwt", { session: false }),
  SendUserSurveys
);

//POST JSON  to server
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  AddSurvey
);

//DELETE survey from server
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  DeleteSurvey
);

//GET the details of a particualr survey
router.get(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  GetSurvey
);

//POST the changes to the server
router.post(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  EditSurvey
);

//POST responses to a specific survey
router.post("/responses", AddResponse);

//POST update to a surveys date range property
router.post(
  "/updatedaterange",
  passport.authenticate("jwt", { session: false }),
  UpdateActiveDateRange
);

export default router;
