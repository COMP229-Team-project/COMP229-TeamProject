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
