import { Request, Response, NextFunction } from "express";
import SurveyModel from "../models/survey";

//READ the survey collection from database
export function SendSurveyCatalogue(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //find everything in collection surveys is pointed to and sort in alphabetical order
  SurveyModel.find({}, {}, { sort: { name: 1 } }, (err, surveys) => {
    if (err) {
      console.error(err);
    }

    //respond with JSON
    console.log(surveys);
    res.json(surveys);
  });
}

//Add a new surver to the database
export function AddSurvey(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // Create a new Order Object
  let newSurvey = new SurveyModel({
    title: req.body.title,
    description: req.body.description,
    avatar: req.body.avatar,
    question: req.body.question,
  });

  // Add new Order Object to the Database
  SurveyModel.create(newSurvey, (err, SurveyModel) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "New Survey is Posted" });
    }
  });
}
