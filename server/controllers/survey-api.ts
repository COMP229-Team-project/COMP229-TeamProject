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

// GET - process the delete by user id
export function DeleteSurvey(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //get the id property off the request objects parameters
  let id = req.params.id;
  //use the id requested and the Mongoose books model to look for a match in the db and remove it
  SurveyModel.remove({ _id: id }, (err) => {
    if (err) {
      //if theres an error, log and respond with an error
      console.error(err);
      res.end(err);
    }
  });
}
