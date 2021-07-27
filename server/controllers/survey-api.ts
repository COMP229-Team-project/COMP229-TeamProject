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
  // Create a new survey with mogoose model
  let newSurvey = new SurveyModel({
    title: req.body.title,
    description: req.body.description,
    avatar: req.body.avatar,
    questions: req.body.questions,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });

  // Add new survey object to the Database
  SurveyModel.create(newSurvey, (err, SurveyModel) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //respond with json if succesful
      res.json({ success: true, msg: "New Survey is Created" });
    }
  });
}

// Delete a survey form the database
export function DeleteSurvey(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //get the id property off the request objects parameters
  let id = req.params.id;
  //use the id requested and the Mongoose Survey model to look for a match in the db and remove it
  SurveyModel.remove({ _id: id }, (err) => {
    if (err) {
      //if theres an error, log and respond with an error
      console.error(err);
      res.end(err);
    }
    res.json({ success: true, msg: "Survey has been deleted" });
  });
}

// get a single survey document from the database
export function GetSurvey(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //get the id property off the request objects parameters
  let id = req.params.id;

  //use the id requested and Mongoose books model to look for a match in the db and outpot it to the page
  SurveyModel.findById(id, {}, {}, (err, survey) => {
    if (err) {
      console.error({ err: err, id: id });
      res.end(err);
    } else {
      res.json(survey);
    }
  });
}

// update a specific document
export function EditSurvey(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //get the id property off the request objects parameters
  let id = req.params.id;

  //create a new survey document with the values from the form fields
  let updatedSurvey = new SurveyModel({
    _id: id,
    title: req.body.title,
    description: req.body.description,
    avatar: req.body.avatar,
    questions: req.body.questions,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });

  //use the id requested and Mongoose books model to look for a match in the db and update it
  SurveyModel.updateOne({ _id: id }, updatedSurvey, {}, (err) => {
    if (err) {
      //if theres an error, log and end the request
      console.error(err);
      res.end(err);
    }
    //respond with a message on successful post
    res.json({ success: true, msg: "Survey has been updated" });
  });
}

// push an object containing survey responses into a survey object
export function AddResponse(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //find everything in collection surveys is pointed to and sort in alphabetical order
  //get the id property off the request objects parameters

  let id = req.body.id;

  let responses = {
    response1: req.body.response1,
    response2: req.body.response2,
    response3: req.body.response3,
    response4: req.body.response4,
  };

  console.log({ id: id, response: responses });
  //use the id requested and Mongoose books model to look for a match in the db and update it
  SurveyModel.updateOne(
    { _id: id },
    { $push: { responses: responses } },
    {},
    (err) => {
      if (err) {
        //if theres an error, log and end the request
        console.error(err);
        res.end(err);
      }
      //respond with a message on successful post
      res.json({ success: true, msg: "Response has been added" });
    }
  );
}

// update only the date range of a survey
export function UpdateActiveDateRange(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //find everything in collection surveys is pointed to and sort in alphabetical order
  //get the id property off the request objects parameters

  let id = req.body.id;

  let update = { startDate: req.body.startDate, endDate: req.body.endDate };

  console.log({ id: id, update: update });
  //use the id requested and Mongoose books model to look for a match in the db and update it
  SurveyModel.updateOne({ _id: id }, update, {}, (err) => {
    if (err) {
      //if theres an error, log and end the request
      console.error(err);
      res.end(err);
    }
    //respond with a message on successful post
    res.json({ success: true, msg: "Lifetime has been updated!" });
  });
}
