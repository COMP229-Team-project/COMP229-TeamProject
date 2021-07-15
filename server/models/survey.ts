import Mongoose from "mongoose";
import { Interface } from "readline";

//shorthand for mongoose schema
const Schema = Mongoose.Schema;

interface Question {
  question: String;
  answer1: String;
  answer2: String;
  answer3: String;
  answer4: String;
}

//configure schema to interface with survey collection
const SurveySchema = new Schema(
  {
    title: String,
    description: String,
    avatar: String,
    question: [
      {
        question1: String,
        answer1: String,
        answer2: String,
        answer3: String,
        answer4: String,
      },
      {
        question2: String,
        answer1: String,
        answer2: String,
        answer3: String,
        answer4: String,
      },
      {
        question3: String,
        answer1: String,
        answer2: String,
        answer3: String,
        answer4: String,
      },
      {
        question4: String,
        answer1: String,
        answer2: String,
        answer3: String,
        answer4: String,
      },
    ],
  },
  {
    collection: "surveys",
    timestamps: true,
  }
);

const SurveyModel = Mongoose.model("Surveys", SurveySchema);

export default SurveyModel;
