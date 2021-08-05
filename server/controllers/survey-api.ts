import { Request, Response, NextFunction } from "express";
import SurveyModel from "../models/survey";
import User from "../models/user";
import passport from "passport";
import jwt from "jsonwebtoken";
import { DB } from "../config/db";
import UserModel from "../models/user";
import nodemailer from "nodemailer";
import { template } from "../models/email-template";

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

export function SendUserSurveys(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //find everything in collection surveys is pointed to and sort in alphabetical order
  console.log(req.body.creatorId);
  SurveyModel.find(
    { creatorId: req.body.creatorId },
    {},
    { sort: { name: 1 } },
    (err, surveys) => {
      if (err) {
        console.error(err);
      }

      //respond with JSON
      console.log(surveys);
      res.json(surveys);
    }
  );
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
    creatorId: req.body.creatorId,
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

//Respond with a webtoken if a user authenticates successfully
export function ProcessLogin(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  passport.authenticate("local", (err, user, info) => {
    console.log({ authfunctionstart: "Response from the backend" });
    // server err?
    if (err) {
      console.log({ serverError: err });
      return res.json(err);
    }
    // is there a user login error?
    if (!user) {
      console.log({ loginError: "Response from the backend" });
      return res.json("Login Failed. Wrong Email and/or Password");
    }

    req.login(user, (err) => {
      console.log({ reqloginstart: "Response from the backend" });
      // server error?
      if (err) {
        return res.json(err);
      }

      const payload = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };

      console.log({ payload: payload });

      const authToken = jwt.sign(payload, DB.Secret, {
        expiresIn: 604800, // 1 week
      });

      return res.json({
        success: true,
        msg: "User Logged in Successfully!",
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        token: authToken,
      });
    });
  })(req, res, next);
}

//Register a new user
export function RegisterUser(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // instantiate a user object
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  let password = req.body.password;

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log({ passportmsg: newUser.get("email") });
      console.log(err);
      if (err.name == "UserExistsError") {
        console.log("Error: User Already Exists!");
        return res.json("Account with that email already exists!");
      }
    } else {
      // if no error exists, then registration is successful

      // redirect the user and authenticate them
      passport.authenticate("local", (err, user, info) => {
        // server err?
        if (err) {
          return res.json(err);
        }
        // is there a user login error?
        if (!user) {
          return res.json("Login Failed. Wrong Email and/or Password");
        }
        req.login(user, (err) => {
          // server error?
          if (err) {
            return res.json(err);
          }

          const payload = {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          };

          const authToken = jwt.sign(payload, DB.Secret, {
            expiresIn: 604800, // 1 week
          });
          console.log({
            success: true,
            msg: "User Logged in Successfully!",
            user: {
              id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            },
            token: authToken,
          });

          return res.json({
            success: true,
            msg: "User Logged in Successfully!",
            user: {
              id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            },
            token: authToken,
          });
        });
      })(req, res, next);
    }
  });
}

export function ProcessLogout(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  req.logout();
  res.json({ success: true, msg: "User Successfully Logged out!" });
}

export function UpdateUserProfile(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.body._id;

  let user = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  console.log({ id: id, user: user });
  //use the id requested and Mongoose books model to look for a match in the db and update it
  UserModel.updateOne({ _id: id }, user, {}, (err) => {
    if (err) {
      //if theres an error, log and end the request
      console.log(err);
      res.json({
        success: false,
        msg: "There was an error updating your proflie.",
      });
    }
    //respond with a message on successful post
    res.json({ success: true, msg: "User has been updated!" });
  });
}

export function EmailSurveyDataToUser(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log(req.body.user);
  console.log(req.body.survey);
  let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "kenpfowler@outlook.com",
      pass: "Genesis89#!$",
    },
  });

  let mailOptions = {
    from: "kenpfowler@outlook.com",
    to: `${req.body.user.email}`,
    subject: "Your QuizHive Report",
    html: template(req.body.user.firstName, req.body.survey),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json("There was a problem sending your report");
    } else {
      console.log("Email sent!");
      res.json({ success: true, msg: "Your report was sent" });
    }
  });
}
